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
        "CLIENT-ID": "vrf7f51VoiLC1rHOOUrkHlorIKdXlZxwxXUvx11",
        AUTHORIZATION: "apikey tinakdhinna:9683b81e0431b404b7d8dc3a807484b2",
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
