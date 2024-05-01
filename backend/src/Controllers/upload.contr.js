const axios = require("axios");
const url = "https://api.veryfi.com/api/v8/partner/w2s";

class FileData {
  constructor(fileDataBase64) {
    this.fileDataBase64 = fileDataBase64;
  }
}

const uploadFile = async (req, res) => {
  try {
    const fileData = new FileData(req.body.fileDataBase64);
    const payload = {
      file_data: fileData.fileDataBase64,
      max_pages_to_process: 1,
    };

    const response = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "CLIENT-ID": "vrf5jj3Sjdizhm1Tlvc2OTfsHY82988xj8UtGre",
        AUTHORIZATION: "apikey aliali444735:0baac63d78ed4c872b1df33ec47a2e88",
      },
    });
    // res.json(response.data);
    console.log(response.data)
    return res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadFile };
