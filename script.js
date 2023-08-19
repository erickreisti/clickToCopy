const btn = document.querySelector('.btn');
const coupon = document.querySelector('.coupon');

const copyText = (e) => {
  e.preventDefault();

  coupon.select();
  coupon.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(coupon.value);
};

btn.addEventListener('click', copyText);
