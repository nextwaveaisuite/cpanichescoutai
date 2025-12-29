'use client';

export default function Pricing() {
  const plans = [
    { name: 'Starter', price: 9.99, credits: 20, features: ['20 Credits', 'Basic Analysis', 'Email Support'] },
    { name: 'Professional', price: 19.00, credits: 50, features: ['50 Credits', 'Advanced Analysis', 'Priority Support'], popular: true },
    { name: 'Enterprise', price: 29.00, credits: 100, features: ['100 Credits', 'Full Access', '24/7 Support'] }
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Simple, Transparent Pricing</h1>
        <p style={{ fontSize: "1.1rem", color: "#a8adb8" }}>Choose the plan that fits your needs</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "60px" }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              background: "#1a2847",
              padding: "30px",
              borderRadius: "8px",
              border: plan.popular ? "2px solid #4f7cff" : "1px solid #2b3a6a",
              position: "relative",
              transform: plan.popular ? "scale(1.05)" : "scale(1)"
            }}
          >
            {plan.popular && (
              <div style={{
                position: "absolute",
                top: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#4f7cff",
                color: "white",
                padding: "5px 15px",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: "bold"
              }}>
                Most Popular
              </div>
            )}
            <h3 style={{ marginBottom: "10px", color: "#fff" }}>{plan.name}</h3>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#4f7cff", marginBottom: "5px" }}>
              ${plan.price.toFixed(2)}
            </div>
            <div style={{ color: "#a8adb8", marginBottom: "20px" }}>{plan.credits} Credits</div>
            <button
              style={{
                width: "100%",
                padding: "12px",
                background: plan.popular ? "#4f7cff" : "#2b3a6a",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                marginBottom: "20px"
              }}
            >
              Get Started
            </button>
            <div style={{ borderTop: "1px solid #2b3a6a", paddingTop: "20px" }}>
              {plan.features.map((feature) => (
                <div key={feature} style={{ color: "#a8adb8", marginBottom: "8px", fontSize: "0.9rem" }}>
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
