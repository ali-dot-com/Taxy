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
        "CLIENT-ID": "vrf0SlTenBtd9WWE0y5DLhn22F7in6KZfSO8rPN",
        AUTHORIZATION: "apikey tinakdhinna:983b3403d099bbcce090b41fbe7d8c02",
      },
    });
    return res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadFile };
