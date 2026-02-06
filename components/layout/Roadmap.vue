<template>
  <section class="flex flex-col gap-[50px] max-[540px]:gap-6">
    <h2 class="section__title">Путь ученика</h2>

    <div class="roadmap">
      <div class="roadmap__line"></div>

      <div class="roadmap__steps">
        <div v-for="(step, index) in steps" :key="index" class="roadmap__step">
          <div class="roadmap__number">{{ index + 1 }}</div>
          <div class="roadmap__content">
            <h3 class="roadmap__step-title">{{ step.title }}</h3>
            <p class="roadmap__step-descr">{{ step.descr }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: "Просмотр уроков",
    descr: "Изучаете теорию и практику по видеоурокам в удобном темпе",
  },
  {
    title: "Выполнение заданий",
    descr: "Применяете знания на практике, разрабатывая микросервисы",
  },
  {
    title: "Код-ревью",
    descr:
      "Получаете детальную обратную связь по каждому Pull Request, разбираем ошибки и улучшаем код",
  },
  {
    title: "Поддержка ментора",
    descr: "Еженедельные созвоны, помощь с вопросами и сложными темами",
  },
  {
    title: "Подготовка резюме",
    descr: "Составляем резюме, которое привлекает внимание компаний",
  },
  {
    title: "Мок-интервью",
    descr: "Практикуете собеседования и получаете фидбек",
  },
  {
    title: "Поиск работы",
    descr: "Откликаетесь на вакансии и получаете офферы",
  },
];
</script>

<style scoped>
.section__title {
  font-size: 90px;
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

.roadmap {
  position: relative;
  padding: 20px 0;
}

.roadmap__line {
  position: absolute;
  left: 28px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #e59cff 0%, #ba9cff 50%, #9cb2ff 100%);
  border-radius: 2px;
}

.roadmap__steps {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.roadmap__step {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding-left: 4px;
}

.roadmap__number {
  width: 52px;
  height: 52px;
  min-width: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5a2bc7, #e59cff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 20px rgba(229, 156, 255, 0.4);
}

.roadmap__content {
  flex: 1;
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid rgba(229, 156, 255, 0.3);
  background: rgba(10, 1, 25, 0.6);
  box-shadow: inset 0 0 15px rgba(198, 135, 234, 0.2);
  transition: all 0.3s ease;
}

.roadmap__content:hover {
  border-color: #e59cff;
  box-shadow:
    inset 0 0 20px rgba(198, 135, 234, 0.3),
    0 0 15px rgba(229, 156, 255, 0.2);
}

.roadmap__step-title {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 6px;
}

.roadmap__step-descr {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

@media screen and (max-width: 1300px) {
  .section__title {
    font-size: 58px;
  }

  .roadmap__line {
    left: 22px;
    width: 3px;
  }

  .roadmap__steps {
    gap: 18px;
  }

  .roadmap__step {
    gap: 18px;
  }

  .roadmap__number {
    width: 44px;
    height: 44px;
    min-width: 44px;
    font-size: 18px;
  }

  .roadmap__content {
    padding: 14px 20px;
    border-radius: 14px;
  }

  .roadmap__step-title {
    font-size: 20px;
  }

  .roadmap__step-descr {
    font-size: 15px;
  }
}

@media screen and (max-width: 540px) {
  .section__title {
    font-size: 28px;
  }

  .roadmap__line {
    left: 16px;
    width: 2px;
  }

  .roadmap__steps {
    gap: 12px;
  }

  .roadmap__step {
    gap: 12px;
    padding-left: 0;
  }

  .roadmap__number {
    width: 34px;
    height: 34px;
    min-width: 34px;
    font-size: 14px;
  }

  .roadmap__content {
    padding: 12px 14px;
    border-radius: 12px;
  }

  .roadmap__step-title {
    font-size: 16px;
    margin-bottom: 4px;
  }

  .roadmap__step-descr {
    font-size: 13px;
  }
}
</style>
