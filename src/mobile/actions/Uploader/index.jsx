import host from "src/config"

export const GameFileUploadRequest = (file, folder) => {
    return new Promise(async (resolve, reject) => {
        const formData = new FormData();
        await formData.append('source', file);
        fetch(`${host}/upload/game/${folder}`, {
            header: { 'Content-Type': 'multipart/form-data' },
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => resolve(data || null))
            .catch(err => reject(err));
    });
};
export const FileUploadRequest = file => {
    return new Promise(async (resolve, reject) => {
        const formData = new FormData();
        await formData.append('source', file[0]);
        fetch(`${host}/upload/tmp`, {
            header: { 'Content-Type': 'multipart/form-data' },
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => resolve(data || null))
            .catch(err => reject(err));
    });
};