function sayHi() {
    // Trigger confetti effect
    confetti({
        particleCount: 100,  // Number of confetti particles
        spread: 90,          // Spread of the confetti
        origin: { x: 0.5, y: 0.5 }  // Confetti originates from the center
    });

    // Alert message
    alert("Hey there 👋 Nice to meet you!");
}