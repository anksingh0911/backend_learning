import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECERT_KEY 
});

const fileUploadOnCloudinary = async (localFilePath) => {
    try{
      if(!localFilePath) return "File path not found"
      // upload file to the cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto"
      })
      // file has been uploaded successfully
      console.log("File uploaded successfully", response.url)
      return response
    }catch(error){
      fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the uploaded file operation got failed
      return null
    }
}

export {fileUploadOnCloudinary}
