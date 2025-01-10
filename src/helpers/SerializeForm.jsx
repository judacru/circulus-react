import React from 'react'

export const SerializeForm = (form) => {
    const formData = new FormData(form);
    const obj = {};
    formData.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}
