<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'Frontendchart',
  extends: Radar,
  data (){
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Bar Dateset',
            data: [
            ],
            backgroundColor: [
              'rgba(102,51,51,0.6)',
            ],
            borderColor: [
              'rgba(102,51,51,1)',
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
        scale: {
          ticks: {
      beginAtZero:true,
      max :5,
      min :0
    }
        }
      }
    }
  },
  mounted () {
    this.getSkills () //getSkilK関数のmetohd内で処理する①！
    this.renderChart(this.data, this.options) //②！①が先に実行されてて数値が出ないと描画できないから
  },
  methods: {
    getSkills () {
      const skills = this.$store.getters.skillName(0)
      this.data.labels =skills
      const scores = this.$store.getters.skillScore(0)
      this.data.datasets[0].data =scores
  }
  }
}
</script>
