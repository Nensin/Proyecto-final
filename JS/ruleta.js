const slots = document.querySelectorAll('.slot');
const totalSlots = slots.length;
const anglePerSlot = 360 / totalSlots;

slots.forEach((slot, index) => {
    const angle = anglePerSlot * index + anglePerSlot / 2; // Centro del sector
    slot.style.transform = `rotate(${angle}deg)`;
});


