<template>
	<section
		class="w-full flex flex-row gap-10 max-[540px]:flex-col max-[540px]:gap-6 max-[1300px]:gap-8"
	>
		<div
			class="section__card flex flex-col justify-between p-10 w-3/5 gap-[50px] max-[540px]:w-full max-[540px]:p-4 max-[540px]:gap-6 max-[1300px]:p-6 max-[1300px]:gap-7"
		>
			<h1
				class="section__title text-8xl font-extrabold tracking-wide max-[540px]:text-5xl max-[1300px]:text-7xl"
			>
				.Net Fullstack Development course
			</h1>

			<ul class="flex flex-col gap-6 max-[540px]:gap-3 max-[1300px]:gap-4">
				<li class="flex flex-row items-center max-[540px]:items-start">
					<img
						src="~/assets/icon/star.png"
						alt="пункт списка."
						class="max-[540px]:w-6 max-[1300px]:w-7"
					/>
					<span
						class="text-white text-xl max-[540px]:text-base max-[1300px]:text-lg"
					>
						Получишь опыт разработки фулстек приложения с нуля
					</span>
				</li>
				<li class="flex flex-row items-center max-[540px]:items-start">
					<img
						src="~/assets/icon/star.png"
						alt="пункт списка."
						class="max-[540px]:w-6 max-[1300px]:w-7"
					/>
					<span
						class="text-white text-xl max-[540px]:text-base max-[1300px]:text-lg"
					>
						Получишь большой пет-проект для резюме
					</span>
				</li>
				<li class="flex flex-row items-center max-[540px]:items-start">
					<img
						src="~/assets/icon/star.png"
						alt="пункт списка."
						class="max-[540px]:w-6 max-[1300px]:w-7"
					/>
					<span
						class="text-white text-xl max-[540px]:text-base max-[1300px]:text-lg"
					>
						Освоишь сложные принципы и концепции разработки
					</span>
				</li>
				<li class="flex flex-row items-center max-[540px]:items-start">
					<img
						src="~/assets/icon/star.png"
						alt="пункт списка."
						class="max-[540px]:w-6 max-[1300px]:w-7"
					/>
					<span
						class="text-white text-xl max-[540px]:text-base max-[1300px]:text-lg"
					>
						Поработаешь в команде, как на реальной работе
					</span>
				</li>
			</ul>

			<a href="https://t.me/sachkova_mng" class="section__consult-btn">
				Получить консультацию
			</a>
		</div>

		<div
			class="section__card pt-6 w-2/5 flex flex-col justify-end max-[540px]:w-full max-[540px]:pt-3.5 max-[1300px]:pt-4"
		>
			<img src="~/assets/img/author.png" alt="автор." class="w-11/12 mx-auto" />

			<div
				class="flex flex-col items-center gap-7 pb-10 px-6 max-[540px]:pb-3 max-[540px]:px-3 max-[540px]:gap-4 max-[1300px]:pb-6 max-[1300px]:gap-6"
			>
				<span class="author font-bold text-white">Кирилл Сачков</span>

				<ul
					class="flex flex-row gap-6 w-full max-[540px]:gap-3.5 max-[1300px]:gap-4"
				>
					<li class="flex-1">
						<a href="https://t.me/sachkov_blog" class="section__btn">
							<span class="section__btn-text">Telegram</span>
							<img
								src="~/assets/icon/tg.png"
								alt="телеграм."
								class="max-[540px]:w-5 max-[1300px]:w-6"
							/>
						</a>
					</li>
					<li class="flex-1">
						<a
							href="https://www.youtube.com/@KirillSachkov"
							class="section__btn"
						>
							<span class="section__btn-text">YouTube</span>
							<img
								src="~/assets/icon/yt.png"
								alt="ютуб."
								class="max-[540px]:w-5 max-[1300px]:w-6"
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<style scoped>
.section__card {
	border-radius: 24px;
	border: 1px solid #e59cff;
	background: rgba(10, 1, 25, 0.6);
	box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
}

.author {
	font-size: 40px;
}

.section__btn {
	padding: 12px 0;
	border-radius: 16px;
	border: 1px solid #e59cff;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
	transition: box-shadow 0.2s ease-in-out;
}

.section__btn:focus-visible {
	outline: none;
}

.section__btn:hover {
	box-shadow: 0 0 15px #e59cff;
	transition: box-shadow 0.2s ease-in-out;
}

.section__btn-text {
	background: linear-gradient(
		90deg,
		#e59cff 0.01%,
		#ba9cff 50.01%,
		#9cb2ff 100%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.section__title {
	line-height: 110%;
	background: linear-gradient(
		90deg,
		#e59cff 0.01%,
		#ba9cff 50.01%,
		#9cb2ff 100%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.section__consult-btn {
	width: 100%;
	padding: 26px 32px;
	text-align: center;
	border-radius: 24px;
	border: 1px solid #e59cff;
	background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
	box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
	color: #0a0119;
	font-size: 18px;
	transition: box-shadow 0.2s ease-in-out;
}

.section__consult-btn:hover {
	box-shadow: 0px 0px 15.1px 0px #e59cff inset;
	transition: box-shadow 0.2s ease-in-out;
}

@media screen and (max-width: 1300px) {
	.section__card {
		border-radius: 16px;
	}

	.author {
		font-size: 32px;
	}

	.section__btn {
		padding: 10px 0;
		border-radius: 13px;
		gap: 6px;
	}

	.section__consult-btn {
		padding: 20px 28px;
		border-radius: 16px;
	}
}

@media screen and (max-width: 540px) {
	.section__card {
		border-radius: 12px;
		box-shadow: 0px 0px 8px 0px rgba(198, 135, 234, 0.5) inset;
	}

	.author {
		font-size: 28px;
	}

	.section__btn {
		padding: 8px 0;
		border-radius: 8px;
		gap: 3px;
	}

	.section__btn:hover {
		box-shadow: 0 0 7px #e59cff;
	}

	.section__consult-btn {
		padding: 16px 24px;
		border-radius: 12px;
		font-size: 16px;
	}
}
</style>
