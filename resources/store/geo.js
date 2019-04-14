export const actions = {
  province() {
    return this.$axios.get('Geo/Provinces')
  }
}
