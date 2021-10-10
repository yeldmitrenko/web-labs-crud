const BASE_URL = "https://localhost:5500/api";
const RESOURCE_URL = `${BASE_URL}/vouchers`;

const baseRequest = async ({urlPath = "", method = "GET", body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body)
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    } catch (error) {
        
    }
};

export const getAllVouchers = async () => {
    const rawRes = await baseRequest({ method: "GET" });

    return rawRes.json();
};

export const postVoucher = (body) => baseRequest({
    method: "POST", body
});

export const updateVouchers = (id, body) => baseRequest({
    urlPath: `/${id}`, method: "PUT", body
});

export const deleteVoucher = (id) => ({
    urlPath: `/${id}`, method: "DELETE"
});
