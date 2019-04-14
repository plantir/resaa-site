export const actions = {
  province() {
    return this.$axios.get('/api/Geo/Provinces')
  }
}
