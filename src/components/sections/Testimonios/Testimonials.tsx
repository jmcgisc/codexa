import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Estilos para la sección de testimonios
const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
  width: 100%;
`;

const TestimonialsTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #ff6fab, #22b5fa, #fbc011);
    margin: 1rem auto 0;
  }
`;

const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #ff6fab, #22b5fa, #fbc011);
    border-radius: 15px 15px 0 0;
  }
`;

const QuoteIcon = styled(FaQuoteLeft)`
  color: rgba(0, 0, 0, 0.1);
  font-size: 3rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  border: 3px solid #f0f0f0;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.h4`
  margin: 0;
  color: #333;
  font-size: 1.1rem;
`;

const AuthorRole = styled.span`
  color: #777;
  font-size: 0.9rem;
`;

const StarRating = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const StarIcon = styled(FaStar)<{ $filled: boolean }>`
  color: ${props => props.$filled ? '#FFD700' : '#ddd'};
  margin-right: 0.2rem;
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Las membresías han transformado completamente mi experiencia. El acceso exclusivo vale cada centavo.",
      author: "María González",
      role: "Miembro Gold",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      text: "Nunca pensé que encontraría tanto valor en una membresía. Los beneficios superan con creces el costo.",
      author: "Carlos Mendoza",
      role: "Miembro Diamond",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      text: "La membresía Platinum ha sido la mejor inversión que he hecho este año. Totalmente recomendado.",
      author: "Ana López",
      role: "Miembro Platinum",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <TestimonialsSection>
      <TestimonialsTitle>¿Qué dicen nuestros clientes?</TestimonialsTitle>
      <TestimonialsContainer>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <QuoteIcon />
            <StarRating>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} $filled={i < testimonial.rating} />
              ))}
            </StarRating>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <TestimonialAuthor>
              <AuthorImage src={testimonial.image} alt={testimonial.author} />
              <AuthorInfo>
                <AuthorName>{testimonial.author}</AuthorName>
                <AuthorRole>{testimonial.role}</AuthorRole>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;