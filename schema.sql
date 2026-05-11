CREATE TABLE tracking_data (
    id SERIAL PRIMARY KEY,
    ip_address VARCHAR(50),
    latitude FLOAT,
    longitude FLOAT,
    user_agent TEXT,
    city VARCHAR(100),
    country VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);