import { offer } from '../assets/images';
import { Button } from '../components/Button';
import { arrowRight } from "../assets/icons";

export const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img className="object-contain w-full" src={offer} alt="" width={773} height={687} />
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"><span className="text-coral-red">Special</span> Offer</h2>
                <p className="mt-4 lg:max-w-lg info-text">Embark on a shopiing journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fulfull your unique desires, surpassing the loftiest expectatiens. Your journey with us is nothing short of exceptional.</p>
                <div className="flex flex-wrap gap-4 mt-11">
                    <Button label="Shop now" iconURL={arrowRight} />
                    <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
                </div>
            </div>
        </section>
    )
}