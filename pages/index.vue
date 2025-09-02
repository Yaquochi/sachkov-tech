<template>
    <div class="app">
        <!-- <div
            class="bg-emerald-400 text-white sticky top-0 left-0 right-0 w-full px-10 py-6 flex flex-row justify-center items-center divide-x drop-shadow-xl z-50 max-[540px]:px-6 max-[540px]:py-2"
        >
            <h2
                class="uppercase text-3xl px-3 max-[540px]:text-2xl max-[540px]:text-center"
            >
                День знаний
            </h2>
            <h2
                class="uppercase text-3xl px-3 max-[540px]:text-2xl max-[540px]:text-center"
            >
                скидки до 25%
            </h2>
        </div> -->

        <div class="app__fullcontent">
            <LayoutHeader />

            <div class="app__content">
                <LayoutCover />
                <LayoutShortAbout />
                <LayoutAboutProfession />
                <LayoutWillSuit />
                <LayoutConsistOf />
                <LayoutProgramm />
                <LayoutWhatYouGet />
                <LayoutReviews />
                <LayoutFaq />
                <LayoutSendForm />
                <LayoutFooter />
            </div>
        </div>

        <a href="#">
            <UButton
                icon="i-heroicons-arrow-small-up"
                size="xl"
                color="purple"
                variant="solid"
                class="fixed bottom-0 right-0 mb-4 mr-4 animate-bounce"
                :ui="{
                    rounded: 'rounded-full',
                    color: {
                        purple: {
                            solid: 'dark:text-white bg-purple-500 shadow-sm',
                        },
                    },
                }"
            />
        </a>
    </div>
</template>

<style>
* {
    font-family: "Play", sans-serif;
}

.app {
    background-color: #0a0119;
    background-image: url("/img/bg.png");
    background-size: cover;
    background-position: center top;
    min-height: 100vh;
    position: relative;
}

.app__fullcontent {
    padding: 40px 100px;
    max-width: 1600px;
    margin: 0 auto;
    overflow: hidden;
}

.app__content {
    display: flex;
    flex-direction: column;
    gap: 140px;
}

@media screen and (max-width: 1300px) {
    .app__fullcontent {
        padding: 34px 40px;
    }

    .app__content {
        gap: 100px;
    }
}

@media screen and (max-width: 540px) {
    .app {
        background-image: url("/img/bgmobile.png");
    }

    .app__fullcontent {
        padding: 24px 8px;
    }

    .app__content {
        gap: 60px;
    }
}
</style>
