export const actions = {
  province() {
    return this.$http.get('Geo/Provinces')
  }
}
