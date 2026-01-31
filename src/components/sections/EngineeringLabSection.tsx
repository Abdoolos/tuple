'use client';

import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';

const EngineeringLabSection = () => {
  const { t } = useLocale();
  const content = t.engineeringLab;

  return (
    <div className="services-style-four-area default-padding" id="engineering-lab" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #fff 100%)' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="site-heading text-center mb-5">
              <div className="d-inline-block px-4 py-2 mb-3" style={{ background: 'rgba(16, 185, 129, 0.1)', borderRadius: '30px' }}>
                <span style={{ color: '#10b981', fontWeight: '600', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  <i className="fas fa-code me-2"></i>
                  {content.badge}
                </span>
              </div>
              <h2 className="title" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '15px' }}>{content.title}</h2>
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                {content.subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {content.services.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={service.slug}>
              <Link href={`/engineering-lab/${service.slug}`} className="text-decoration-none">
                <div
                  className="h-100"
                  style={{
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '35px 30px',
                    boxShadow: '0 5px 30px rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.15)';
                    e.currentTarget.style.borderColor = '#10b981';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 30px rgba(16, 185, 129, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.1)';
                  }}
                >
                  <div className="d-flex align-items-center mb-4">
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '15px'
                    }}>
                      <i className={service.icon} style={{ color: '#fff', fontSize: '24px' }}></i>
                    </div>
                    <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#1a1a2e' }}>
                      {service.title}
                    </h4>
                  </div>
                  <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                    {service.description}
                  </p>
                  <span style={{ color: '#10b981', fontWeight: '600', fontSize: '14px' }}>
                    {content.learnMore} <i className="fas fa-arrow-right ms-1"></i>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link 
            href="/engineering-lab" 
            className="btn"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#fff',
              padding: '14px 40px',
              borderRadius: '30px',
              fontWeight: '600',
              fontSize: '16px',
              border: 'none',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)'
            }}
          >
            {content.viewAll} <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EngineeringLabSection;
