export type WorkCategory =
  | "pm"
  | "consulting"
  | "lp"
  | "crm"
  | "ads"
  | "sns"
  | "affiliate";

export const categoryLabels: Record<WorkCategory, string> = {
  pm: "事業推進・CMO",
  consulting: "コンサル・講師",
  lp: "LP制作・LPO",
  crm: "CRM構築",
  ads: "広告運用",
  sns: "SNS運用",
  affiliate: "アフィリエイト",
};

export type IndustryCategory =
  | "staffing"
  | "finance"
  | "housing"
  | "education"
  | "career"
  | "love"
  | "parenting"
  | "other";

export type Work = {
  id: string;
  category: WorkCategory;
  extraCategories?: WorkCategory[]; // 追加バッジ表示用（複数カテゴリにまたがる案件）
  industry: string;
  industryCategory: IndustryCategory; // 業種グルーピング用
  title: string;
  summary: string;
  metrics?: string[]; // 強調表示する成果（複数可）
  scope?: string[]; // タグ
  ongoing?: boolean; // 対応中フラグ（バッジ表示）
  needsHearing?: boolean; // 詳細ヒアリングが必要
  comingSoon?: boolean; // 制作中（公開予定）フラグ
  url?: string | string[]; // 公開中LP・サービスのURL（複数の場合は配列）
};

// 業種カテゴリ名（industryCategory → 表示名）
export const industryLabels: Record<IndustryCategory, string> = {
  staffing: "人材・採用",
  finance: "金融・保険",
  housing: "住宅・不動産",
  education: "教育・スクール",
  career: "キャリア・支援",
  love: "恋愛・婚活",
  parenting: "育児・ライフスタイル",
  other: "その他",
};

// 業種カテゴリの表示順
export const industryOrder: IndustryCategory[] = [
  "staffing",
  "finance",
  "housing",
  "education",
  "career",
  "love",
  "parenting",
  "other",
];

export const works: Work[] = [
  // ============================================================
  // 人材・採用 (11件)
  // ============================================================
  {
    id: "ads-haken-recruit",
    category: "ads",
    industry: "人材派遣",
    industryCategory: "staffing",
    title: "工場系人材派遣会社の広告運用",
    summary:
      "運用型広告の広告運用から求人広告代理店のコントロールまで、広告に関わる業務を一貫して対応しました。",
    metrics: ["応募単価 5,000円", "採用単価 12,000円", "ROAS 4,500%"],
    scope: ["広告運用", "クリエイティブ制作", "求人原稿制作", "LP制作"],
    needsHearing: true,
  },
  {
    id: "crm-lstep",
    category: "crm",
    industry: "人材派遣",
    industryCategory: "staffing",
    title: "工場系人材派遣会社のLステップ構築",
    summary:
      "リッチメニューや挨拶メッセージ等の初期設定はもちろん、応募から面接までの動線設計、ステップ配信のシナリオ作成、面接予約システムの実装まで、一貫して構築しました。",
    metrics: ["採用数 20名以上UP", "応募数 120件以上UP"],
    scope: ["Lステップ", "採用CRM", "導線設計", "ステップ配信構築"],
  },
  {
    id: "crm-ats",
    category: "crm",
    industry: "人材派遣",
    industryCategory: "staffing",
    title: "工場系人材派遣会社のATSツール構築",
    summary:
      "RPMというATSツールを大幅に改修し、面接日程調整やメッセージの自動化、応募者リストを資産化する運用設計、電話対応漏れのアラート実装まで、幅広く構築しました。",
    metrics: ["週明けの面接設定率 50%UP", "面接予約数 40%UP"],
    scope: ["ATS", "自動化設計", "応募者管理", "業務効率化"],
  },
  {
    id: "pm-staffing",
    category: "pm",
    industry: "人材派遣",
    industryCategory: "staffing",
    title: "工場系人材派遣会社の事業推進",
    summary:
      "集客から面接、入社後の定着まで、事業全体を伸ばすために必要な領域を横断して改革を主導しました。集客戦略の見直しや応募動線の再設計、応募者リストの資産化、面接からヒアリング形式への転換、新規ATSやAI活用の検証まで、挑戦役として幅広く取り組みました。",
    scope: ["集客戦略", "採用フロー改革", "新規施策推進", "スキーム改革"],
  },
  {
    id: "lp-major-staffing",
    category: "lp",
    industry: "大手人材",
    industryCategory: "staffing",
    title: "大手人材会社の新卒採用イベントLP制作",
    summary:
      "大手人材会社が主催する新卒採用イベントの集客用LPを、コンサルティングと制作の両軸でサポートしています。クライアントから提示された要件に対し、構成とデザインの両面から最適な提案を行い、ブランディングと集客を両立する設計を進めています。",
    metrics: ["業界大手案件", "コンサル×制作"],
    scope: ["コンセプト設計", "ワイヤーフレーム", "ディレクション", "戦略コンサル"],
    ongoing: true,
    comingSoon: true,
  },
  {
    id: "lp-willtec-engineer",
    category: "ads",
    extraCategories: ["lp"],
    industry: "エンジニア派遣(新卒採用)",
    industryCategory: "staffing",
    title: "エンジニア派遣会社の新卒採用WEB集客",
    summary:
      "新卒採用の入り口となるセミナー集客を目的に、Meta広告の運用・LP制作・広告CR制作まで、一気通貫で対応しています。LPの設計から広告運用まで、WEB集客の全領域をワンストップで担当しました。",
    metrics: ["CPA 4,000円台", "Meta広告×LP制作×CR制作 一貫対応"],
    scope: ["Meta広告運用", "LP制作", "広告CR制作", "WEB戦略"],
    ongoing: true,
    url: [
      "https://campaign-link.studio.site/gaxi-willtec/careerseminar",
      "https://campaign-link.studio.site/gaxi-willtec/careerseminar-c",
    ],
  },
  {
    id: "lp-baseme-gakushi",
    category: "lp",
    industry: "HRtech(サイト集客)",
    industryCategory: "staffing",
    title: "HRtechサービスの集客LP制作",
    summary:
      "HRtechサービスの会員獲得を目的としたコラボキャンペーンLPを制作しました。プロフィール作成→特典訴求で会員登録を促進する構成設計を担当しています。",
    scope: ["構成設計", "キャンペーン設計", "コピー監修"],
    url: "https://baseme.app/lp/gaxi202512",
    needsHearing: true,
  },
  {
    id: "lp-jkhd-internship",
    category: "lp",
    industry: "新卒採用(インターン集客)",
    industryCategory: "staffing",
    title: "27卒インターン集客LP制作",
    summary:
      "27卒向け体験型インターンの集客LP制作を担当しました。学生視点での参加メリット訴求の構成設計を実施しています。",
    scope: ["構成設計", "コピー監修", "新卒採用LP制作"],
    url: "https://campaign-link.studio.site/jkhd/20251129",
    needsHearing: true,
  },
  {
    id: "ads-shinsotsu-event",
    category: "ads",
    industry: "新卒採用(スーパーバイザー職)",
    industryCategory: "staffing",
    title: "スーパーバイザーの新卒採用集客広告運用",
    summary:
      "スーパーバイザー職の新卒採用を目的とした集客広告を担当しました。ターゲットの行動文脈から逆算した配信設計でCPAを抑制しています。",
    metrics: ["CPA 5,000円"],
    scope: ["広告運用", "新卒採用"],
    needsHearing: true,
  },
  {
    id: "lp-apparel-staffing",
    category: "lp",
    industry: "アパレル特化人材派遣",
    industryCategory: "staffing",
    title: "アパレル系特化の人材派遣LP制作",
    summary:
      "アパレル業界に特化した人材派遣サービスのLPを制作しました。業界文脈に合わせた構成・コピーで設計しています。",
    scope: ["構成設計", "コピー監修"],
  },
  {
    id: "ads-nurse",
    category: "ads",
    industry: "看護師転職エージェント",
    industryCategory: "staffing",
    title: "看護師転職エージェントのリスト獲得",
    summary:
      "WEB広告での集客テストとオプトイン獲得を目的に、Meta×Googleの二段運用を実施しました。",
    metrics: ["20名以上のリスト獲得", "応募CPA 700円台"],
    scope: ["Meta広告", "Google広告"],
  },

  // ============================================================
  // 金融・保険 (5件)
  // ============================================================
  {
    id: "ads-fire-insurance",
    category: "ads",
    industry: "金融(火災保険)",
    industryCategory: "finance",
    title: "火災保険のリスティング広告運用",
    summary:
      "Yahoo!・Googleリスティング広告を併用し、CPAを安定的に5,000円台へ落とし込んだ運用事例です。",
    metrics: ["CPA 5,000円台"],
    scope: ["Yahoo!広告", "Google広告", "リスティング"],
    needsHearing: true,
  },
  {
    id: "lp-fire-insurance",
    category: "lp",
    industry: "金融(火災保険)",
    industryCategory: "finance",
    title: "火災保険LP制作",
    summary:
      "ヒアリング・競合分析・ワイヤーフレーム設計・構成設計・広告運用までを一貫して担当した火災保険LP制作案件です。",
    scope: ["ヒアリング", "競合分析", "ワイヤー", "広告連動"],
    url: "https://www.sala-fs.co.jp/salanokasaihoken/",
  },
  {
    id: "lp-reverse-mortgage",
    category: "lp",
    industry: "金融(リバースモーゲージ)",
    industryCategory: "finance",
    title: "リバースモーゲージLP制作",
    summary:
      "シニア層向け金融商材のLP制作を担当しました。商材理解と読み手の不安を踏まえた構成設計を実施しています。",
    scope: ["構成設計", "ディレクション"],
    url: "https://www.sala-fs.co.jp/yutorian/",
  },
  {
    id: "lp-leaseback",
    category: "lp",
    industry: "金融(リースバック)",
    industryCategory: "finance",
    title: "リースバックLP制作",
    summary:
      "金融商材のリースバックLP制作を担当しました。複雑な仕組みを噛み砕いて訴求する構成設計を担当しています。",
    scope: ["構成設計"],
    url: "https://andrenovation.sala.jp/leaseback_lp/",
  },
  {
    id: "aff-ad",
    category: "affiliate",
    industry: "金融商品(FXツール)",
    industryCategory: "finance",
    title: "アドアフィリエイト(直接提携)",
    summary:
      "Meta広告とLP制作を組み合わせ、販売元との直接提携で運用しました。LP制作・Lステップ構築・販売導線設計まで、DRMの一連の流れを実体験することができました。",
    metrics: ["月商70万円達成", "LP CVR 15〜35%", "CPA 250〜500円"],
    scope: ["Meta広告", "LP制作", "Lステップ", "DRM"],
  },

  // ============================================================
  // 住宅・不動産 (4件)
  // ============================================================
  {
    id: "ads-ecocute",
    category: "ads",
    industry: "住宅設備(エコキュート)",
    industryCategory: "housing",
    title: "エコキュート買い替えキャンペーン",
    summary:
      "「壊れて困った瞬間に検索する」商材特性から逆算し、認知(LINE広告)→刈り取り(Google検索)の二段配信を設計しました。結果としてCV経路はリスティング側に集約されました。",
    metrics: ["成約 3件", "ROAS 750%", "CPA 20,000円"],
    scope: ["LINE広告", "Google広告", "戦略設計"],
  },
  {
    id: "lp-real-estate-buy",
    category: "lp",
    industry: "不動産買取",
    industryCategory: "housing",
    title: "不動産買取LP制作",
    summary:
      "不動産買取サービスのLPを制作しました。査定〜買取までの導線設計を含めた構成にしています。",
    scope: ["構成設計"],
  },
  {
    id: "cons-housing-lecturer",
    category: "consulting",
    industry: "大手住宅関連グループ",
    industryCategory: "housing",
    title: "大手住宅関連グループ社内向けWEBマーケ講師",
    summary:
      "社内マーケターの育成を目的に、WEBマーケのテーマで講義・勉強会を担当しました。",
    scope: ["社内教育", "講師"],
  },
  {
    id: "cons-dog-spa",
    category: "consulting",
    industry: "セルフ式ドッグスパ",
    industryCategory: "housing",
    title: "セルフ式ドッグスパの集客コンサル",
    summary:
      "セルフ式ドッグスパサービスの集客戦略・運用方針について、コンサルティングを担当しました。",
    scope: ["集客戦略", "コンサル"],
    needsHearing: true,
  },

  // ============================================================
  // 教育・スクール (5件)
  // ============================================================
  {
    id: "ads-bizschool-google",
    category: "ads",
    industry: "大手ビジネススクール",
    industryCategory: "education",
    title: "Googleリスティング広告担当",
    summary:
      "大手ビジネススクールのリスティング広告運用を担当しています。アカウント設計から日々の運用最適化まで、一貫して対応しています。",
    scope: ["Google広告", "リスティング"],
    ongoing: true,
    needsHearing: true,
  },
  {
    id: "cons-bizschool-lecturer",
    category: "consulting",
    industry: "大手ビジネススクール",
    industryCategory: "education",
    title: "大手ビジネススクールでマーケティング講師",
    summary:
      "大手ビジネススクールにて、マーケティングをテーマに講師として登壇しています。受講者の課題に応じた実践的なカリキュラムで対応しています。",
    scope: ["講師", "カリキュラム設計"],
    ongoing: true,
    needsHearing: true,
  },
  {
    id: "cons-designer-school",
    category: "consulting",
    industry: "デザイナー収益化スクール",
    industryCategory: "education",
    title: "デザイナー収益化マーケスクールの講師",
    summary:
      "デザイナーが収益化するためのマーケティングをテーマに、スクール内で講師として登壇しています。",
    scope: ["講師", "カリキュラム設計"],
    needsHearing: true,
  },
  {
    id: "sns-business-reel",
    category: "sns",
    industry: "ビジネス系SNS",
    industryCategory: "education",
    title: "ビジネス系アカウントのリール運用",
    summary:
      "ビジネステーマのアカウントでリール制作・運用を担当しました。1本で22万再生を獲得した事例です。",
    metrics: ["リール22万再生"],
    scope: ["Instagram", "リール制作"],
  },
  {
    id: "sns-business-followers",
    category: "sns",
    industry: "ビジネス系SNS",
    industryCategory: "education",
    title: "ビジネス系アカウントの初期立ち上げ",
    summary:
      "新規アカウントを立ち上げから設計・運用し、短期間でフォロワーを獲得しました。",
    metrics: ["開始2ヶ月で 1,000フォロワー"],
    scope: ["Instagram", "アカウント設計"],
  },

  // ============================================================
  // キャリア・支援 (1件)
  // ============================================================
  {
    id: "ads-ryugaku-scholarship",
    category: "ads",
    industry: "留学奨学金サイト",
    industryCategory: "career",
    title: "留学奨学金サイトのMeta広告運用",
    summary:
      "業界平均CPA 2〜3万円のジャンルで、業界平均の1/5以下のCPA水準を実現した運用事例です。",
    metrics: ["CPA 4,000円台", "業界平均 2〜3万円"],
    scope: ["Meta広告", "クリエイティブ"],
    needsHearing: true,
  },

  // ============================================================
  // 恋愛・婚活 (6件)
  // ============================================================
  {
    id: "ads-konkatsu",
    category: "ads",
    industry: "婚活サービス",
    industryCategory: "love",
    title: "婚活サービスの広告運用",
    summary:
      "限られた広告予算で、売上に直結する配信設計と検証を実施しました。少額予算でROAS25倍を実現した運用事例です。",
    metrics: ["広告費 2万円", "売上 50万円", "ROAS 2,500%"],
    scope: ["Meta広告", "クリエイティブ", "ターゲティング"],
    needsHearing: true,
  },
  {
    id: "lp-konkatsu-store",
    category: "lp",
    industry: "結婚相談所",
    industryCategory: "love",
    title: "結婚相談所 実店舗集客LP制作",
    summary:
      "結婚相談所の実店舗集客に向けたLPを制作しました。エリア・ターゲット文脈を踏まえた設計を行っています。",
    scope: ["構成設計", "店舗集客"],
    url: "https://all-syugo.hp.peraichi.com/lp1",
  },
  {
    id: "lp-konkatsu-meta",
    category: "lp",
    industry: "結婚相談所",
    industryCategory: "love",
    title: "結婚相談所 Meta広告用LP制作",
    summary:
      "Meta広告流入用のリード獲得LPを制作しました。マッチングアプリ運用ノウハウの訴求を目的とした構成設計を担当しています。",
    scope: ["構成設計", "Meta広告連動", "リード獲得LP制作"],
    url: "https://all-syugo.hp.peraichi.com/meta_lp1",
    needsHearing: true,
  },
  {
    id: "sns-konkatsu-store",
    category: "sns",
    industry: "結婚相談所(実店舗)",
    industryCategory: "love",
    title: "結婚相談所 実店舗アカウント運用",
    summary:
      "実店舗の集客強化を目的に、Instagramアカウントの戦略設計・運用・分析を実施しました。",
    metrics: ["インプレッション数 10倍"],
    scope: ["Instagram", "MEO連動"],
  },
  {
    id: "aff-sns",
    category: "affiliate",
    industry: "恋愛系SNS",
    industryCategory: "love",
    title: "SNSアフィリエイト(恋愛系)",
    summary:
      "Instagram・TikTokを併用し、占いサイト／マッチングアプリ／結婚相談所案件のアフィリエイトを運用しました。マネタイズから逆算したコンセプト設計で、少フォロワーでも成果を実現しています。",
    metrics: ["300フォロワーで月5万円マネタイズ"],
    scope: ["Instagram", "TikTok", "コンセプト設計"],
  },
  {
    id: "ads-konkatsu-counseling",
    category: "ads",
    industry: "婚活カウンセリング",
    industryCategory: "love",
    title: "コンセプトテスト目的のMeta広告運用",
    summary:
      "コンセプト訴求の反応率比較を目的に、限られた予算でMeta広告のクリエイティブ検証を実施しました。",
    metrics: ["メルマガ登録 CPA 400円台"],
    scope: ["Meta広告", "コンセプトテスト"],
  },

  // ============================================================
  // 育児・ライフスタイル (1件)
  // ============================================================
  {
    id: "cons-baby-food",
    category: "consulting",
    industry: "離乳食系Instagram",
    industryCategory: "parenting",
    title: "離乳食系Instagramアカウントのコンサル",
    summary:
      "フォロワー3.5万人規模の離乳食系Instagramアカウントに対し、戦略・コンテンツ設計についてコンサルティングを実施しました。",
    metrics: ["フォロワー 3.5万人規模"],
    scope: ["Instagram", "コンサル"],
  },

  // ============================================================
  // その他 (4件)
  // ============================================================
  {
    id: "ads-pharmacy-fc",
    category: "ads",
    industry: "薬局フランチャイズ",
    industryCategory: "other",
    title: "薬局フランチャイズ加盟の集客",
    summary:
      "「LP制作なし／導線曖昧」の状態から、LP制作・導線設計・Meta×Googleの二段運用までを土台ごと再構築しました。",
    metrics: ["問合せ数 0件 → 8件"],
    scope: ["LPO", "導線構築", "Meta広告", "Google広告"],
  },
  {
    id: "cons-pharmacy-fc",
    category: "consulting",
    industry: "薬局フランチャイズ",
    industryCategory: "other",
    title: "薬局フランチャイズ加盟の集客戦略コンサル",
    summary:
      "「薬剤師が経営者に提案する」導線設計を含む、限定ターゲット向けの集客戦略を企画しました。",
    scope: ["導線設計", "戦略立案"],
  },
  {
    id: "cons-bee",
    category: "consulting",
    industry: "蜂駆除サービス",
    industryCategory: "other",
    title: "蜂駆除サービスの広告運用コンサル",
    summary:
      "ニッチ商材の広告運用について、戦略立案から運用方針までをコンサルティングしました。",
    scope: ["広告運用コンサル", "戦略設計"],
    needsHearing: true,
  },
  {
    id: "cons-local-event",
    category: "consulting",
    industry: "自治体",
    industryCategory: "other",
    title: "自治体イベント支援",
    summary:
      "自治体主催イベントの集客・運営に関わる支援を実施しました。",
    scope: ["イベント", "コンサル"],
  },
];
