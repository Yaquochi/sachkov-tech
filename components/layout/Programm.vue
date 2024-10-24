<template>
	<section class="section">
		<h2 class="section__title">Программа обучения</h2>

		<ul class="flex flex-col gap-10 max-[540px]:hidden">
			<li class="flex flex-row gap-1 relative">
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						Архитектура бэкенд приложений
					</h3>
					<p>
						Мы подробно изучим и на практике разработаем большой проект,
						применяя современные архитектурные практики:
						<span class="section__card-span">чистая архитектура</span>,
						<span class="section__card-span">CQRS</span>,
						<span class="section__card-span">DDD</span>,
						<span class="section__card-span">модульный монолит</span> и
						<span class="section__card-span">микросервисы</span>.  Постепенно мы
						перейдем от монолитной архитектуры к микросервисной.
					</p>
				</div>
				<img
					src="~/assets/icon/lilRightArr.png"
					alt="стрелка."
					class="object-contain"
				/>
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						Работа с базой данных
					</h3>
					<p>
						Практически ни одно бэкенд приложение не обходится без базы данных.
						В этом курсе мы подробно изучим как работать с
						<span class="section__card-span">EF Core</span> и
						<span class="section__card-span">Dapper</span>, проектировать базу
						данных, настривать сложные конфигурции, писать сложные запросы,
						управлять транзакциями и блокировками.
					</p>
				</div>

				<img
					src="~/assets/icon/rightArr.png"
					alt="стрелка."
					class="object-contain absolute -right-7 top-12 h-40"
				/>
			</li>

			<li class="flex flex-row gap-1 relative">
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						ASP.NET Core
					</h3>
					<p>
						На этом курсе мы очень подробно изучим, как разрабатывать
						масштабируемые и производительные
						<span class="section__card-span">Web API</span> приложения на
						<span class="section__card-span">ASP.NET Core</span>. Вы научитесь
						работать с <span class="section__card-span">конфигурацией</span>,
						<span class="section__card-span">логированием</span>,
						<span class="section__card-span">контроллерами</span>,
						<span class="section__card-span">роутингом</span>,
						<span class="section__card-span">middleware</span>,
						<span class="section__card-span">аутентификацией</span> и
						<span class="section__card-span">авторизацией</span>,
						<span class="section__card-span">атрибутами</span> и
						<span class="section__card-span">фильтрами</span>.
					</p>
				</div>
				<img
					src="~/assets/icon/lilLeftArr.png"
					alt="стрелка."
					class="object-contain"
				/>
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						Рельные бизнес задачи
					</h3>
					<p>
						Решение большого количества задач из реальной разработки. Вы на
						практике будете решать бизнес задачи:
						<span class="section__card-span"> CRUD операции</span>,
						<span class="section__card-span">
							взаимодействие между модулями</span
						>, <span class="section__card-span"> валидация и ошибки</span>,
						<span class="section__card-span"> состояния и события</span>.
					</p>
				</div>

				<img
					src="~/assets/icon/leftArr.png"
					alt="стрелка."
					class="object-contain absolute -left-7 top-12 h-40"
				/>
			</li>

			<li class="flex flex-row gap-1 relative">
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						Инфраструктура
					</h3>
					<p>
						Сегодня современные веб приложения постоянно взаимодействуют с
						внешними сервисами, будь то
						<span class="section__card-span">S3 хралище</span>, например
						<span class="section__card-span">MinIO</span>, нереляционные базы
						данных, такие как <span class="section__card-span">MongoDb</span> и
						<span class="section__card-span">Redis</span>, брокеры сообщений -
						<span class="section__card-span">Kafka</span> и
						<span class="section__card-span">RabbitMQ</span>. Вы поймете зачем и
						как правильно использовать внешние сервисы для вашего приложения.
					</p>
				</div>
				<img
					src="~/assets/icon/lilRightArr.png"
					alt="стрелка."
					class="object-contain"
				/>
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						Тестирование
					</h3>
					<p>
						На курсе вы изучите, что такое
						<span class="section__card-span">юнит</span> и
						<span class="section__card-span">интеграционные тестирование</span>
						и на практике напишите тесты для своего веб приложения.
					</p>
				</div>

				<img
					src="~/assets/icon/rightArr.png"
					alt="стрелка."
					class="object-contain absolute -right-7 top-12 h-40"
				/>
			</li>

			<li class="flex flex-row gap-1 relative">
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						Docker и Docker compose
					</h3>
					<p>
						Вы обязательно запустите своё приложение и множество различных
						сервисов в <span class="section__card-span">Docker</span> с помощью
						<span class="section__card-span">Docker compose</span>. Владение
						навыками и понимание контейнеризации сегодня является стандартом для
						каждого разработчика.
					</p>
				</div>
				<img
					src="~/assets/icon/lilRightArr.png"
					alt="стрелка."
					class="object-contain"
				/>
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						Фоновые процессы и задачи
					</h3>
					<p>
						На курсе вы научитель работать с
						<span class="section__card-span">background сервисами</span>,
						<span class="section__card-span">Quartz</span> и
						<span class="section__card-span">Hangfire</span> для работы с
						различными задачами и расписанием.
					</p>
				</div>

				<img
					src="~/assets/icon/rightArr.png"
					alt="стрелка."
					class="object-contain absolute -right-7 top-12 h-40"
				/>
			</li>

			<li class="flex flex-row gap-1 relative">
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						Модульный монолит и микросервисы
					</h3>
					<p>
						Научись на практике создавать
						<span class="section__card-span">модульные</span> и
						<span class="section__card-span">распределённые системы</span> для
						достижения максимальной производительности и масштабируемости.
						Сегодня это ялвяется стандартом индустрии.
					</p>
				</div>
				<img
					src="~/assets/icon/lilRightArr.png"
					alt="стрелка."
					class="object-contain"
				/>
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						Kafka, RabbitMq, Redis
					</h3>
					<p>
						На курсе вы освоите, как применять такие сложные технологии как:
						<span class="section__card-span">Kafka</span>,
						<span class="section__card-span">RabbitMq</span> и
						<span class="section__card-span">Redis</span>. Благодаря
						<span class="section__card-span">Redis</span> мы освоим
						распределённое кэширование. С помощью
						<span class="section__card-span">RabbitMq</span> и
						<span class="section__card-span">Kafka</span> мы сможем реализовать
						событийно ориентированную архитектуру.
					</p>
				</div>

				<img
					src="~/assets/icon/rightArr.png"
					alt="стрелка."
					class="object-contain absolute -right-7 top-12 h-40"
				/>
			</li>

			<li class="flex flex-row gap-1 relative">
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						React, TypeScript и Tailwind
					</h3>
					<p>
						Сегодня очень ценятся именно
						<span class="section__card-span">fullstack</span> разработчики.
						Поэтому на этом курсе мы изучим, как для вашего бэкенда сделать
						фронтенд на <span class="section__card-span">React</span>. Вы
						разработаете полноценное фронтенд приложение и каждый сможет им
						воспользоваться.
					</p>
				</div>
				<img
					src="~/assets/icon/lilRightArr.png"
					alt="стрелка."
					class="object-contain"
				/>
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						Redux, Axios, Rtk query
					</h3>
					<p>
						Здесь вы сможете на практике связать фронтенд приложение с бэкендом,
						отправлять запросы с помощью
						<span class="section__card-span">axios</span> и
						<span class="section__card-span">rtk query</span>, а также управлять
						состоянием приложения с помощью
						<span class="section__card-span">Redux</span>.
					</p>
				</div>

				<img
					src="~/assets/icon/rightArr.png"
					alt="стрелка."
					class="object-contain absolute -right-7 top-12 h-40"
				/>
			</li>

			<li class="flex flex-row gap-1 relative">
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">
						Резюме и собеседования
					</h3>
					<p>
						Всё шло к этому моменту, на курсе я подготовлю тебя к
						<span class="section__card-span">собеседованиям</span> и помогу
						составить правильно <span class="section__card-span">резюме</span>,
						чтобы ты точно получил свой догожданный
						<span class="section__card-span">оффер</span>. Мы регулярно проводим
						мок собеседования и созвоны, где обсуждаем текущий рынок в it.
					</p>
				</div>
				<img
					src="~/assets/icon/lilRightArr.png"
					alt="стрелка."
					class="object-contain"
				/>
				<div class="section__card flex flex-col gap-2">
					<h3 class="section__card-title text-2xl font-semibold">CI/CD</h3>
					<p>
						Освой деплой своего приложения с помощью
						<span class="section__card-span">Github Actions</span>. Ты на
						практике сможешь развернуть своё веб приложение, чтобы все могли им
						пользоваться!
					</p>
				</div>
			</li>

			<li class="section__total">
				Подробно изучи весь современный стэк на практике. Поработай с реальным
				проектом. Выполняй задачи и получай регулярное ревью.
			</li>
		</ul>

		<ul class="hidden max-[540px]:flex flex-col gap-3">
			<li class="section__card w-10/12">
				Вы разработаете полноценное веб приложение, состоящее из нескольких
				backend сервисов, написанных на C# и ASP.NET Core.
			</li>

			<li class="mx-auto py-2">
				<img
					src="~/assets/icon/lilRightArr.png"
					alt="стрелка."
					class="object-contain rotate-[35deg] h-6"
				/>
			</li>

			<li class="section__card w-10/12 ml-auto">
				Вы разработаете полноценное веб приложение, состоящее из нескольких
				backend сервисов, написанных на C# и ASP.NET Core.
			</li>

			<li class="mx-auto py-2">
				<img
					src="~/assets/icon/lilLeftArr.png"
					alt="стрелка."
					class="object-contain -rotate-[35deg] h-6"
				/>
			</li>

			<li class="section__card w-10/12">
				Вы разработаете полноценное веб приложение, состоящее из нескольких
				backend сервисов, написанных на C# и ASP.NET Core.
			</li>

			<li class="mx-auto py-2">
				<img
					src="~/assets/icon/lilRightArr.png"
					alt="стрелка."
					class="object-contain rotate-[35deg] h-6"
				/>
			</li>

			<li class="section__total w-10/12 ml-auto">
				Подробно изучите популярные и эффективные архитектурные подходы к
				разработке.
			</li>
		</ul>

		<LayoutStack />
	</section>
</template>

<style scoped>
.section {
	display: flex;
	flex-direction: column;
	gap: 60px;
}

.section__title {
	font-size: 80px;
	font-weight: 800;
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

.section__card {
	border-radius: 12px;
	border: 1px solid #e59cff;
	background: rgba(10, 1, 25, 0.6);
	padding: 24px;
	font-size: 18px;
	font-weight: 400;
	color: #fff;
}

.section__total {
	border-radius: 12px;
	border: 1px solid #e59cff;
	background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
	padding: 24px;
	color: #0a0119;
	text-align: center;
	font-size: 28px;
	font-weight: 600;
	line-height: 110%;
}

.section__card-span {
	background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: 600;
}

.section__card-title {
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

@media screen and (max-width: 540px) {
	.section {
		gap: 24px;
	}

	.section__title {
		font-size: 28px;
	}

	.section__card {
		padding: 16px;
		font-size: 16px;
	}

	.section__total {
		padding: 16px;
		font-size: 18px;
	}
}
</style>
