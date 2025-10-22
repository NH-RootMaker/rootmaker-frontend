export const RECOMMENDATION_TEXT = {
  withPersonality: {
    goal: {
      title: `이번 달엔 커피를 두 번 덜 마시면 목표금액을 더욱 쉽게 채울 수 있어요!`,
      highlightText: "커피를 두 번 덜 마시면"
    },
    saving: {
      title: (personalityType: string) => `매일 조금씩 꾸준히 저축하는 습관이 ${personalityType} 타입과 잘 맞아요!`,
      highlightText: "매일 조금씩 꾸준히"
    },
    spending: {
      title: (personalityType: string) => `${personalityType} 타입은 계획적인 소비를 통해 목표를 달성할 수 있어요!`,
      highlightText: "계획적인 소비"
    }
  },
  withoutPersonality: {
    coffee: {
      title: "이번 달엔 커피를 두 번 덜 마시면 목표 금액을 더욱 쉽게 채울 수 있어요!",
      highlightText: "커피를 두 번 덜 마시면"
    }
  }
} as const;