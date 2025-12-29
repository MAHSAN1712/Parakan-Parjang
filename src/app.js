document.addEventListener('alpine:init', () => {
    Alpine.data('donasi',() => ({
        items : [
            { id:1, name: 'Donasi Bronze', img: 'Bronze.jpg', price:  10000},
            { id:2, name: 'Donasi Silver', img: 'Silver.jpg', price:  20000},
            { id:3, name: 'Donasi Gold', img: 'Gold.jpg', price:  30000},
            { id:4, name: 'Donasi Diamond', img: 'Diamond.jpg', price:  40000},
        ],
    }));

    

    Alpine.store('cart', {
        items : [], 
        total : 0,
        quantity : 0,
        add(newItem) {
            // Cek apakah ada barang yang sama 
            const cartItems = this.items.find((item) => item.id ===newItem.id);

            // Jika Belum 
            if(!cartItems) {
                this.items.push({...newItem,quantity: 1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;
        
            } else {
                // Jika Barang sudah ada
                this.items = this.items.map((item)=> {
                    if(item.id !== newItem.id) {
                        return item;
                    } else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;

                    };
                });
            };
            // console.log(this.total);
        },
        remove(id){
            const cartItems = this.items.find((item) => item.id === id);
            
            // jika lebih dari satu 
            if(cartItems.quantity > 1) {
                this.items = this.items.map((item) => {
                    if(item.id !== id){
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.total -= item.price;
                        return item;
                    }

                })
            } else if (cartItems.quantity === 1) {

                // Jika barangnya sisa 1 
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity --;
                this.total -= cartItems.price;

            }
        }
    });
});






// Konversi Rupiah 
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID',{
        style: 'currency',
        currency: 'IDR',
        // minimumFractionDigits: 0,

    }).format(number);
};