class User < ApplicationRecord

    validates :email, :dining_city, :first_name, :last_name, :session_token, :password_digest, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length:{minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password

    has_many :favorites,
    foreign_key: :user_id,
    class_name: :Favorite

    has_many :reservations,
    foreign_key: :guest_id,
    class_name: :Reservation

    has_many :reviews,
    foreign_key: :guest_id,
    class_name: :Review

    has_many :reserved_restaurants,
    through: :reservations,
    source: :restaurant


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

end
