const db = require("../../utils/databaseConfig");

const tes = (req, res) => {
  const queryGetDevicesDashboard = `SELECT * FROM devices INNER JOIN datas LIMIT 10`;
  db.query(queryGetDevicesDashboard, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      const chartSuhuAir = {
        labels: [],
        datasets: [
          {
            label: "by °Celcius",
            data: [],
            backgroundColor: "#FF6384",
          },
        ],
      };
      const chartSuhuLingkungan = {
        labels: [],
        datasets: [
          {
            label: "by °Celcius",
            data: [],
            backgroundColor: "#FF6384",
          },
        ],
      };
      const chartTds = {
        labels: [],
        datasets: [
          {
            label: "by PPM",
            data: [],
            backgroundColor: "#FF6384",
          },
        ],
      };
      results.forEach((result) => {
        // Suhu air
        chartSuhuAir.labels.push(result.topic1);
        chartSuhuAir.datasets[0].data.push(result.topic1_VALUE);

        // Suhu lingkungan
        chartSuhuLingkungan.labels.push(result.topic2);
        chartSuhuLingkungan.datasets[0].data.push(result.topic2_VALUE);

        // TDS
        chartTds.labels.push(result.topic3);
        chartTds.datasets[0].data.push(result.topic3_VALUE);
      });

      res.json({
        lastData: results,
        dataChartSuhuAir: chartSuhuAir,
        dataChartSuhuLingkungan: chartSuhuLingkungan,
        dataChartTds: chartTds,
      });
    } else {
      res.json({ statusText: "ERROR" });
    }
  });
};

module.exports = tes;
