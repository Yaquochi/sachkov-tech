<template>
	<ul
		class="grid grid-cols-3 gap-10 max-[540px]:flex max-[540px]:flex-row max-[540px]:gap-3 max-[540px]:overflow-x-scroll max-[540px]:scrollbar-hide listAnimation max-[1300px]:gap-7"
	>
		<li
			v-for="item in items"
			:key="item.label"
			class="card p-10 flex flex-col gap-6 items-center justify-center max-[540px]:py-3 max-[540px]:px-4 max-[540px]:gap-3 max-[540px]:w-56 max-[1300px]:p-5 max-[1300px]:gap-4"
		>
			<img
				:src="item.icon"
				:alt="item.label"
				class="max-[540px]:w-10 max-[1300px]:w-20"
			/>

			<span class="text-white text-lg text-center max-[540px]:text-base">
				{{ item.label }}
			</span>
		</li>
	</ul>
</template>

<script setup>
import intensive from "/img/short/intensive.png";
import interview from "/img/short/interview.png";
import resume from "/img/short/resume.png";
import review from "/img/short/review.png";
import stack from "/img/short/stack.png";
import students from "/img/short/students.png";

const items = [
	{
		label: "Интенсивное обучение и практика",
		icon: intensive,
	},
	{
		label: "Современный стэк",
		icon: stack,
	},
	{
		label: "Регулярное код-ревью",
		icon: review,
	},
	{
		label: "Помощь в составлении резюме",
		icon: resume,
	},
	{
		label: "Работа в команде",
		icon: students,
	},
	{
		label: "Подготовка к собеседованию",
		icon: interview,
	},
];
</script>

<style scoped>
.card {
	border-radius: 30px;
	border: 1px solid #e59cff;
	background: rgba(10, 1, 25, 0.6);
	box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
}

@media screen and (max-width: 1300px) {
	.card {
		border-radius: 20px;
	}
}

@media screen and (max-width: 540px) {
	.card {
		border-radius: 12px;
		box-shadow: 0px 0px 8px 0px rgba(198, 135, 234, 0.5) inset;
		flex: 0 0 auto;
	}

	.listAnimation {
		width: max-content;
		animation: 12s linear 1s infinite alternate slidein;
	}

	@keyframes slidein {
		0% {
			margin-left: -100%;
		}
		100% {
			margin-left: 5%;
		}
	}
}
</style>
