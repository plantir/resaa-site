<style lang="scss" scoped>
.payment-wrapper {
  text-align: center;
  .payment-btn {
    min-width: 160px;
    min-height: 46px;
    font-size: 16px;
    background: linear-gradient(to left, #0ec7e6, #28db9a);
    font-weight: 500;
    .v-icon {
      font-size: 24px;
    }
  }
}
.charge-items {
  display: flex;
  margin: 90px 100px;
  .charge-item-wrapper {
    width: 25%;
    padding: 0 28px;
    border-radius: 30px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    .charge-item {
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1), 0 -2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 64px;
      min-height: 370px;

      .item-header {
        position: relative;
        span {
          position: absolute;
          color: #fff;
          font-weight: normal;
          top: 30px;
          right: 0;
          left: 0;
          display: flex;
          bottom: 0;
          margin: auto;
          justify-content: center;
          align-items: flex-start;
          font-size: 32px;
        }
      }
      .item-content {
        margin-top: -20px;
        padding: 0 30px 10px;
        font-size: 13px;
        color: #848484;
        font-weight: 500;
        p {
          margin: 20px 0;
        }
      }
      .item-footer {
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        .price {
          font-size: 18px;
          font-weight: 500;
          color: #848484;
        }
        .select-holder {
          width: 30px;
          height: 30px;
          border-radius: 100%;
          border: 2px solid #ccc;
          .v-icon {
            color: #fff;
          }
        }
      }
    }
    &.selected {
      transform: scale(1.1);
      .item-footer {
        .price {
          color: #27db9b;
        }
        .select-holder {
          border-color: #27db9b;
          background: #27db9b;
        }
      }
    }
  }
}
.continue {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  .text {
    font-size: 16px;
    color: #969696;
    font-weight: 500;
    .custom-color {
      color: #27db9b;
    }
  }
}
</style>

<template>
  <section>
    <div class="card">
      <h1>افزایش اعتبار</h1>
      <h1>برای برقراری تماس لطفا حساب خود را به میزان دقایق مکالمه شارژ کنید:</h1>

      <div class="charge-items">
        <div
          class="charge-item-wrapper"
          @click="selected = item"
          :class="{selected:item==selected}"
          v-for="(item,index) in items"
          :key="index"
        >
          <div class="charge-item">
            <div class="item-header">
              <div class="header-bg">
                <ChargeSvg :color="item.color" />
              </div>
              <span>{{item.duration | persianDigit}} دقیقه</span>
            </div>
            <div class="item-content">
              <h4>{{item.title}}</h4>
              <p>{{item.description}}</p>
            </div>
            <div class="item-footer">
              <div class="price">{{item.price | currency | persianDigit}} تومان</div>
              <div class="select-holder">
                <v-icon v-if="item==selected">check</v-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="payment-wrapper">
        <v-btn class="payment-btn" dark round>
          <v-icon class="ml-3">fa-credit-card</v-icon>
          <span>پرداخت</span>
        </v-btn>
      </div>
      <div class="continue">
        <div class="text">
          <span>اعتبار فعلی حساب شما</span>
          <span class="custom-color">{{3000 | currency | persianDigit}} تومان</span>
          <span>است . شما میتوانید</span>
          <span class="custom-color">{{28 | persianDigit}} دقیقه</span>
          <span>با دکتر فتانه محمدی صحبت کنید</span>
        </div>
        <v-btn color="#27db9b" round outline>ادامه با اعتبار فعلی</v-btn>
      </div>
    </div>
  </section>
</template>

<script>
import ChargeSvg from "@/components/charge-svg";
export default {
  components: { ChargeSvg },
  data() {
    let items = [
      {
        duration: 15,
        title: "- آشنایی با مشاور",
        description:
          "- با این فرصت کوتاه خیالتان از کیفیت مشاوره تلفنی راحت می شود",
        color: ["#FDBD10", "#7F5F08"],
        price: 15000
      },
      {
        duration: 30,
        title: "- مناسب برای پیگیری روند مشاوره",
        description: "- ممکن است برای اولین جلسه مشاوره کافی نباشد",
        color: ["#EF4871", "#782439"],
        price: 30000
      },
      {
        duration: 45,
        title: "- یک جلسه مشاوره استاندارد",
        description:
          "- پیشنهاد ما برای اینکه شما و مشاور فرصت کافی برای رسیدگی به دغدغه ها داشته باشید",
        color: ["#0EC7E6", "#076473"],
        price: 45000
      },
      {
        duration: 60,
        title: "- جلسه مشاوره مفصل و کامل",
        description:
          "- جزییات خیلی مهم است هر چه فرصت بیشتری داشته باشید بهتر می توانید از مشاور کمک بگیرید",
        color: ["#28DB9A", "#146E4D"],
        price: 60000
      }
    ];
    return {
      items,
      selected: items[2]
    };
  }
};
</script>