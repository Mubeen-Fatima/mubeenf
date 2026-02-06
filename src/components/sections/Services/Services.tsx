import { motion } from 'framer-motion';
import { HiCpuChip, HiShoppingCart, HiChartBar, HiArrowRight } from 'react-icons/hi2';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { services } from '../../../data/services';
import './Services.css';

const iconMap: Record<string, typeof HiCpuChip> = {
  brain: HiCpuChip,
  cart: HiShoppingCart,
  chart: HiChartBar,
};

export function Services() {
  return (
    <SectionWrapper
      id="services"
      title="Services"
      subtitle="What I build"
      dark
    >
      <div className="services-container">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || HiCpuChip;
          return (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="service-card-inner">
                {/* Animated border */}
                <div className="service-border" />

                {/* Number */}
                <span className="service-number mono">0{index + 1}</span>

                {/* Icon */}
                <motion.div
                  className="service-icon"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon />
                </motion.div>

                {/* Content */}
                <h3 className="service-title">{service.name}</h3>

                <ul className="service-list">
                  {service.offerings.map((offering, i) => (
                    <motion.li
                      key={offering}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <HiArrowRight className="service-list-icon" />
                      <span>{offering}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover glow */}
                <div className="service-glow" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
