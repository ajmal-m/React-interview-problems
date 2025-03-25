export const UpdateQuantity = (quantity: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(quantity);
        }, 4000)
    });
}