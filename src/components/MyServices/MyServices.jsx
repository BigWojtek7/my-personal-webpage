import Button from '../Button/Button';
import ServiceCard from './ServiceCard';
import clsx from 'clsx';
import { useLanguage } from '../../hooks/useLanguage';

function MyServices() {
  const { currentLanguage } = useLanguage();
  const { translations } = currentLanguage;

  return (
    <section className="bg-bgLight text-center text-primary" id="services">
      <h2
        className={clsx(
          'text-accent',
          "after:mx-auto after:mb-8 after:mt-4 after:block after:h-[1px] after:w-24 after:bg-primary after:content-['']"
        )}
      >
        {translations.services.title}
      </h2>
      <div className="mx-auto mb-16 max-w-5xl gap-8 md:flex">
        <ServiceCard
          title={translations.services.development}
          description={translations.services.descriptions.frontend}
        />
        <ServiceCard
          title="React"
          description={translations.services.descriptions.react}
        />
        <ServiceCard
          title={translations.services.optimization}
          description={translations.services.descriptions.backend}
        />
      </div>
      <Button url="#work" isNewTab={false} className="px-10 py-2">
        {translations.nav.portfolio}
      </Button>
    </section>
  );
}

export default MyServices;
