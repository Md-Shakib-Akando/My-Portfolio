import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
const Contact = () => {



	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_z7pk6lk', 'template_4mfpzro', form.current, {
				publicKey: '0xKtJEBU2HsMUg5eI',
			})
			.then(
				() => {
					toast.success("Message sent successfully!");
					e.target.reset();
				},
				(error) => {
					console.log('FAILED...', error.text);
					toast.error("Failed to send message.");
				},
			);
	};
	return (
		<div>
			<section id='contact' className="py-10  ">
				<h2 className="text-3xl my-10 text-white font-bold   border-b-2 border-b-[#00c58e] pb-3 w-fit mx-auto ">
					Contact Us
				</h2>
				<div className="grid max-w-6xl text-white grid-cols-1 px-6 md:pt-10 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
					<div className="py-6 md:py-0 md:px-6">

						<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
						<div className="space-y-4">
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
								</svg>
								<span>Bogura, Bangladesh</span>
							</p>
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
								</svg>
								<span>+8801316308147</span>
							</p>
							<p className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
								<span>shakib.akando.dev@gmail.com</span>
							</p>
						</div>
					</div>
					<form ref={form} onSubmit={sendEmail} className="flex flex-col  py-6 space-y-6 md:py-0 md:px-6">
						<label className="block">
							<span className="mb-2">Full name</span>
							<input required name='name' type="text" placeholder="Leroy Jenkins" className="block w-full border-1 pl-2 border-white outline-none h-[40px] rounded-md shadow-sm  " />
						</label>
						<label className="block">
							<span className="mb-2">Email address</span>
							<input required name='email' type="email" placeholder="leroy@jenkins.com" className="block w-full pl-2 border-1 border-white outline-none h-[40px] rounded-md shadow-sm  " />
						</label>
						<label className="block">
							<span className="mb-2">Message</span>
							<textarea required rows="3" name='message' className="block w-full border-1 pl-2 border-white outline-none  rounded-md  "></textarea>
						</label>
						<button type='submit' className='btn text-[15px]  md:mt-4 lg:mt-0 text-white shadow-none bg-[#00c58e] border-[#00c58e] hover:text-[#00c58e] hover:bg-[#1b1f2a]'> Submit</button>
					</form>
				</div>
			</section>
			<ToastContainer position="top-right" autoClose={3000} />
		</div>
	);
};

export default Contact;