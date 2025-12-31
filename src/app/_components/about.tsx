import Image from "next/image";
import about1img from '../../../public/about-1.png'
import about2img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";


export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative w-full h-100 rounded-3xl overflow-hidden">
                            <Image
                                src={about1img} alt="Foto do cachorro"
                                fill
                                quality={100}
                                priority={true}
                                className="object-cover hover:scale-110 duration-300"
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
                            <Image
                                src={about2img} alt="Foto do cachorro"
                                fill
                                quality={100}
                                priority={true}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">Sobre</h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex tempora iusto magnam. Velit, cum dolor. Ad sed natus voluptatem quam consectetur fugit? Quam saepe sequi cum nulla dolorem quis?
                        </p>

                        <ul className="">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2006
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 3 veterinários
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é nossa prioridade
                            </li>
                        </ul>


                        <div className="flex gap-4">
                            <a target="_blank" href="https://wa.me/5547997714395?text=Olá vim pelo site e gostaria de saber mais informações."  className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <WhatsappLogoIcon className="w-5 h-5 text-white " />
                                Contato via WhatsApp
                            </a>
                            <a href="#" className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <MapPin className="w-5 h-5" />
                                Endereço da loja
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}