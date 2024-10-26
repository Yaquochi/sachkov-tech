<template>
	<section class="flex flex-col gap-10 max-[540px]:gap-6">
		<h2 class="section__title">Тебе подойдет курс, если:</h2>

		<ul
			class="grid grid-cols-2 gap-10 max-[540px]:grid-cols-1 max-[540px]:gap-3 max-[1300px]:gap-8"
		>
			<li
				v-for="(item, index) in items"
				:key="index"
				class="card p-10 flex flex-row items-center gap-10 max-[540px]:flex-col max-[540px]:items-start max-[540px]:p-4 max-[540px]:gap-3 max-[1300px]:p-6 max-[1300px]:gap-6"
			>
				<span class="card__number">{{ index + 1 }}</span>

				<p class="text-white text-lg">{{ item }}</p>
			</li>

			<li
				class="card_consult p-9 flex flex-col justify-between max-[540px]:p-4 gap-3 max-[1300px]:p-6"
			>
				<span class="card_consult-text">Остались сомнения?</span>

				<a href="https://t.me/sachkova_mng" class="card_consult-btn">
					Получить консультацию
				</a>
			</li>
		</ul>
	</section>
</template>

<script setup>
const items = [
	"Ты знаешь базу С#: умеешь работать с классами, коллекциями, условиями, циклами, интерфейсами, понимаешь базовые принципы ООП",
	"Готов уделять обучению 10+ часов в неделю",
	"Хочешь освоить профессию .Net разработчика и найти работу",
	"Намерен прокачать навыки работы в команде над большим проектом, как на реальной работе",
	"Готов много практиковаться, гуглить, ошибаться, задавать вопросы и просить помощи",
];
</script>

<style scoped>
.section__title {
	font-size: 90px;
	font-weight: 800;
	line-height: 110%;
	background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 35%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.card {
	border-radius: 24px;
	border: 1px solid #e59cff;
	background: rgba(10, 1, 25, 0.6);
	box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
}

.card_consult {
	border-radius: 24px;
	border: 1px solid, #e59cff;
	background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
	box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
}

.card__number {
	font-size: 100px;
	font-weight: 600;
	line-height: 110%;
	background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.card_consult-text {
	color: #0a0119;
	font-size: 21px;
	font-weight: 500;
	line-height: 140%;
}

.card_consult-btn {
	padding: 16px 32px;
	text-align: center;
	border-radius: 24px;
	border: 1px solid, #e59cff;
	background: #0a0119;
	box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
	color: #fff;
	font-size: 20px;
	line-height: 150%;
	transition: box-shadow 0.2s ease-in-out;
}

.card_consult-btn:hover {
	box-shadow: 0px 0px 15.1px 0px #e59cff inset;
	transition: box-shadow 0.2s ease-in-out;
}

@media screen and (max-width: 1300px) {
	.section__title {
		font-size: 58px;
	}

	.card {
		border-radius: 18px;
	}

	.card__number {
		font-size: 60px;
	}

	.card_consult {
		border-radius: 18px;
	}

	.card_consult-btn {
		border-radius: 16px;
		font-size: 18px;
	}
}

@media screen and (max-width: 540px) {
	.section__title {
		font-size: 28px;
	}

	.card {
		border-radius: 12px;
		box-shadow: 0px 0px 8px 0px rgba(198, 135, 234, 0.5) inset;
	}

	.card__number {
		font-size: 28px;
	}

	.card_consult {
		border-radius: 12px;
		box-shadow: 0px 0px 8px 0px rgba(198, 135, 234, 0.5) inset;
	}

	.card_consult-text {
		font-size: 20px;
	}

	.card_consult-btn {
		padding: 16px 24px;
		border-radius: 12px;
		font-size: 16px;
	}
}
</style>
