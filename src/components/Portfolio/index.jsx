import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';

// SwiperJs for Carousel
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

//image imports
import portfolioImage1 from '../../assets/images/placeholder1.png';
import portfolioImage2 from '../../assets/images/placeholder2.png';
import portfolioImage3 from '../../assets/images/placeholder3.png';

const Portfolio = () => {
	return (
		<>
			<Loader type="line-scale" color="#fed002" width={500} />
			<div className="portfolio">
				<div className="portfolio__description">
					<h1 className="portfolio__description__heading">
						{' '}
						<AnimatedLetters strArray={'Portfolio '.split('')} startIdx={1} />
					</h1>
					<p className="portfolio__description__paragraph">
						Here are some of the projects I have done.
					</p>
				</div>
				{/* portfolio Section */}

				<div className="portfolio__projects">
					<h1 className="prev">&#8249;</h1>
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						slidesPerGroup={1}
						loop={true}
						loopFillGroupWithBlank={true}
						navigation={{
							nextEl: '.next',
							prevEl: '.prev',
						}}
						modules={[Navigation]}
						className="mySwiper"
						breakpoints={{
							// when window width is >= 768px
							768: {
								slidesPerView: 2,
							},
						}}
					>
						<SwiperSlide>
							<div
								onClick={() =>
									window.open(
										'https://rockpaperscissorsgamesite.netlify.app/',
										'_blank'
									)
								}
								className="portfolio__projects__project  project2"
							>
								<div className="portfolio__projects__project__head">
									<img
										src={portfolioImage1}
										alt=""
										className="portfolio__projects__project__image"
									/>
								</div>
								<div className="portfolio__projects__project__body">
									<h3 className="portfolio__projects__project__body__heading">
										Rock, Paper, Scissors
									</h3>
									<p className="portfolio__projects__project__body__description">
										Play rock, paper and scissors with computer and record the
										score.
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div
								onClick={() =>
									window.open(
										'https://weatherconditionanalyzer.netlify.app',
										'_blank'
									)
								}
								className="portfolio__projects__project project3"
							>
								<div className="portfolio__projects__project__head">
									<img
										src={portfolioImage2}
										alt=""
										className="portfolio__projects__project__image"
									/>
								</div>
								<div className="portfolio__projects__project__body">
									<h3 className="portfolio__projects__project__body__heading">
										The Weather App
									</h3>
									<p className="portfolio__projects__project__body__description">
										Type in a city name and get related weather data.
									</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div
								onClick={() =>
									window.open('https://heroesgenerator.netlify.app/', '_blank')
								}
								className="portfolio__projects__project project1"
							>
								<div className="portfolio__projects__project__head">
									<img
										src={portfolioImage3}
										alt=""
										className="portfolio__projects__project__image"
									/>
								</div>
								<div className="portfolio__projects__project__body">
									<h3 className="portfolio__projects__project__body__heading">
										Super Hero Search
									</h3>
									<p className="portfolio__projects__project__body__description">
										Searching a super hero by name or generate a random hero.
										Getting the hero’s picture and attributes.
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<h1 className="next">&#8250;</h1>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
