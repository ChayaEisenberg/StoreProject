export const decreaseQty = (id) => {
    return {
        type: "DECREASEQTY",
        id
    };
};

export const addQty = (id, qty) => {
    return {
        type: "ADDQTY",
        qty,
        id
    };
};
