const Checkout = () => {
    return (
        <div>
            <div>
                <AddressSection />
                <DeliverySection />
                <PaymentSection />
            </div>
            <aside>
                <OrderInfoSection />
            </aside>
        </div>
    );
};
