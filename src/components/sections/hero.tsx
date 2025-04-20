import { Container } from '@/components/Container';
import { FadeIn } from '../uis/FadeIn';
import Image from 'next/image';
import tqc from '../../../public/tqc.svg'

export const HomeHero = () => {
    return (
        <div className="hero-container">
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <Image alt='hero' src={tqc} />
                </FadeIn>
            </Container>
        </div>
    );
};
