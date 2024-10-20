// const axios = require('axios');

// exports.getProductRecommendations = async (menstrualCycleData) => {
//     const { startDate, cycleLength } = menstrualCycleData;

//     try {
//         const response = await axios.post('http://localhost:5001/recommendations', {
//             startDate,
//             cycleLength,
//         });

//         return response.data.recommendations;
//     } catch (error) {
//         console.error('Error fetching recommendations:', error);
//         return ['Default items'];
//     }
// };
