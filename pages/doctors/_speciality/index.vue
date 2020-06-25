<template>
  <category
    :category="category"
    :related_doctors="related_doctors"
    :limit="limit"
    :totalItems="totalItems"
    :requestId="requestId"
  />
</template>
<script>
import category from "@/components/categories/index";
export default {
  layout: "speciality",

  components: { category },
  head() {
    return {
      title: this.title,
      __dangerouslyDisableSanitizers: ["script"],
      link: [
        {
          rel: "canonical",
          href: `${process.env.SITE_URL}/doctors/${this.$route.params.speciality}`
        }
      ],
      script: [
        {
          innerHTML: JSON.stringify(this.main_schema),
          type: "application/ld+json"
        },
        {
          innerHTML: JSON.stringify(this.doctors_schema),
          type: "application/ld+json"
        },
        {
          innerHTML: JSON.stringify(this.faq_schema),
          type: "application/ld+json"
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  },
  async asyncData(ctx) {
    let category, related_doctors, requestId;
    let limit = 6;
    let totalItems = 0;
    let category_id = ctx.store.state.category.relation[ctx.params.speciality];
    if (!category_id) {
      return ctx.error({ statusCode: 404, message: "speciality not found" });
    }
    try {
      let { result } = await ctx.$axios.$get(`categories/${category_id}`);
      category = result.manifest;
    } catch (error) {}
    try {
      let { result } = await ctx.$axios.$get(
        `categories/${category_id}/RelatedDoctors`,
        {
          params: {
            limit: limit,
            offset: 0
          }
        }
      );
      related_doctors = result.relatedDoctors;
      totalItems = result.relatedDoctorsTotalCount;
      requestId = result.requestId;
    } catch (error) {}
    return {
      title: category.pageHeaderTitle || category.title,
      description: `دریافت ${category.pageHeaderTitle ||
        category.title} فقط در سامانه رسا، با کمترین هزینه، بدون دریافت نوبت، بدون رفت و آمد، بدون انتظار و با بهترین مشاوران`,
      limit,
      requestId,
      totalItems,
      related_doctors: related_doctors,
      category: category,
      main_schema: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "سامانه رسا",
            item: "https:/resaa.net"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: ctx.params.speciality,
            item: `https://resaa.net/doctors/${ctx.params.speciality}`
          }
        ]
      },
      doctors_schema: {
        "@context": "http://schema.org",
        "@type": "ItemList",
        name: `لیست متخصصین ${category.title}`,
        itemListElement: related_doctors.map((doctor, key) => {
          return {
            "@type": "ListItem",
            position: key + 1,
            url: `https://resaa.net/doctors/${doctor.specialtyEnglishTitle
              .toLowerCase()
              .replace(/ /g, "-")}/${doctor.subscriberNumber}`
            // item: {
            //   url: `https://resaa.net/doctors/${doctor.specialtyEnglishTitle
            //     .toLowerCase()
            //     .replace(/ /g, "-")}/${doctor.subscriberNumber}`,
            //   name: `${doctor.fullNameWithTitle}`,
            //   image: {
            //     "@type": "ImageObject",
            //     url: `https://webapi.resaa.net/Doctors/${doctor.subscriberNumber}/Image`
            //   }
            // }
          };
        })
      },
      faq_schema: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: category.seoContents.map(item => {
          return {
            "@type": "Question",
            name: item.title.replace(/<\/?[a-z0-9]+>/g, ""),
            acceptedAnswer: {
              "@type": "Answer",
              text: item.description
            }
          };
        })
      }
    };
  }
};
</script>