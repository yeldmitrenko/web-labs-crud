const BASE_URL = "http://localhost:8080";
const RESOURCE_URL = `${BASE_URL}/voucher`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body,
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};


export const getAllVouchers = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return await rawResponse.json();
};

export const postVoucher = (body) => baseRequest({ method: "POST", body });

export const updateVoucher = (id, body) => 
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteVoucher = (id) => 
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });
