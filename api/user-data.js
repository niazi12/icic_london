"server-only";

import { handleApiRequest } from "./api-handler";

export const forgetPassApi = async (data) => {
  return handleApiRequest("POST", "/api/auth/forgot-password", {
    body: data,
  });
};

export const resetPassApi = async (data) => {
  return handleApiRequest("POST", "/api/auth/reset-password", {
    body: data,
  });
};

export const getUser = async (email) => {
  const endpoint = "/api/auth/getUser";
  return handleApiRequest("POST", endpoint, { body: { email } });

};

export async function createUser(name, email, password) {
  const endpoint = "/api/auth/register";
  return handleApiRequest("POST", endpoint, { body: { name, email, password } });
}

export const getProfile = async (token) => {
  const response = await handleApiRequest("GET", "/api/auth/user", { token });
  if (response.error) {
    throw new Error(response.error);
  }
  return response.data;
};

export const updateUser = async (token, data) => {
  return handleApiRequest("PUT", "/api/auth/update", {
    token,
    body: data,
  });
};

export const updateBusinessDetails = async (token, formData) => {
  return handleApiRequest("PUT", "/api/auth/business/update", {
    token,
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};


export const prepareBusinessFormData = ({
  businessName,
  businessAddress,
  businessPhone,
  businessEmail,
  businessWebsite,
  image,
  removeBusinessLogo = false,
}) => {
  const formData = new FormData();
  // console.log(image);
  if (businessName) formData.append("businessName", businessName);
  if (businessAddress) {
    formData.append("businessAddress", JSON.stringify(businessAddress));
  }
  if (businessPhone) formData.append("businessPhone", businessPhone);
  if (businessEmail) formData.append("businessEmail", businessEmail);
  if (businessWebsite) formData.append("businessWebsite", businessWebsite);
  if (image) formData.append("businessLogo", image);
  if (removeBusinessLogo) formData.append("removeBusinessLogo", "true");

  return formData;
};