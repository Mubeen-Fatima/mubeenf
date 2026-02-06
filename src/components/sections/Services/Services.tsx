import { motion } from 'framer-motion';
import { HiCpuChip, HiCog6Tooth, HiChartBar } from 'react-icons/hi2';
import { SectionWrapper } from '../../ui/SectionWrapper';
import { services } from '../../../data/services';
import './Services.css';

const iconMap: Record<string, typeof HiCpuChip> = {
  brain: HiCpuChip,
  cog: HiCog6Tooth,
  chart: HiChartBar,
};

export function Services() {
  return (
    <SectionWrapper
      id="services"
      title="Services"
      subtitle="What I can help you build"
      dark
    >
      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || HiCpuChip;
          return (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">
                <Icon />
              </div>

              <div className="service-number mono">0{index + 1}</div>

              <h3 className="service-title">{service.name}</h3>
              <p className="service-description">{service.description}</p>

              <ul className="service-offerings">
                {service.offerings.map((offering) => (
                  <li key={offering}>
                    <span className="offering-bullet" />
                    {offering}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
