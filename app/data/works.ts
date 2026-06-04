export type WorkCategory =
  | "pm"
  | "consulting"
  | "lp"
  | "crm"
  | "ads"
  | "sns"
  | "affiliate";

export const categoryLabels: Record<WorkCategory, string> = {
  pm: "プロダクトマネジメント",
  consulting: "コンサル・講師",
  lp: "LP制作・LPO",
  crm: "CRM構築",
  ads: "広告運用",
  sns: "SNS運用",
  affiliate: "アフィリエイト",
};

export type Work = {
  id: string;
  category: WorkCategory;
  industry: string;
  title: string;
  summary: string;
  metrics?: string[]; // 強調表示する成果（複数可）
  scope?: string[]; // タグ
  recent?: boolean; // 直近1年フラグ
  ongoing?: boolean; // 継続中フラグ
  needsHearing?: boolean; // 詳細ヒアリングが必要
  url?: string; // 公開中LP・サービスのURL
  caseId?: string; // 案件グルーピング用ID
};

// 案件グループ名（caseId → 表示名）
export const caseLabels: Record<string, string> = {
  "case-konkatsu": "結婚相談所（婚活サービス）",
  "case-sala": "大手住宅関連グループ",
  "case-staffing-factory": "工場系特化・人材派遣企業",
  "case-bizschool": "大手ビジネススクール",
  "case-pharmacy-fc": "薬局フランチャイズ",
};

// 案件グループの表示順（多い順）
export const caseOrder: string[] = [
  "case-konkatsu",
  "case-sala",
  "case-staffing-factory",
  "case-bizschool",
  "case-pharmacy-fc",
];

export const works: Work[] = [
  // ============================================================
  // 案件1: 結婚相談所（婚活サービス）= case-konkatsu （6件）
  // ============================================================
  {
    id: "ads-konkatsu",
    category: "ads",
    industry: "婚活サービス",
    title: "婚活サービスの広告運用",
    summary:
      "限られた広告予算で、売上に直結する配信設計と検証を実施。少額予算でROAS25倍を実現した運用事例。",
    metrics: ["広告費 2万円", "売上 50万円", "ROAS 2,500%"],
    scope: ["Meta広告", "クリエイティブ", "ターゲティング"],
    recent: true,
    needsHearing: true,
    caseId: "case-konkatsu",
  },
  {
    id: "ads-konkatsu-counseling",
    category: "ads",
    industry: "婚活カウンセリング",
    title: "コンセプトテスト目的のMeta広告運用",
    summary:
      "コンセプト訴求の反応率比較を目的に、限られた予算でMeta広告のクリエイティブ検証を実施。",
    metrics: ["メルマガ登録 CPA 400円台"],
    scope: ["Meta広告", "コンセプトテスト"],
    caseId: "case-konkatsu",
  },
  {
    id: "lp-konkatsu-store",
    category: "lp",
    industry: "結婚相談所",
    title: "結婚相談所 実店舗集客LP",
    summary:
      "結婚相談所の実店舗集客に向けたLP制作。エリア・ターゲット文脈を踏まえた設計。",
    scope: ["構成設計", "店舗集客"],
    url: "https://all-syugo.hp.peraichi.com/lp1",
    caseId: "case-konkatsu",
  },
  {
    id: "lp-konkatsu-meta",
    category: "lp",
    industry: "結婚相談所",
    title: "結婚相談所 Meta広告用LP",
    summary:
      "Meta広告流入用のリード獲得LP。マッチングアプリ運用ノウハウの訴求を目的とした構成設計を担当。",
    scope: ["構成設計", "Meta広告連動", "リード獲得LP"],
    url: "https://all-syugo.hp.peraichi.com/meta_lp1",
    recent: true,
    needsHearing: true,
    caseId: "case-konkatsu",
  },
  {
    id: "sns-konkatsu-store",
    category: "sns",
    industry: "結婚相談所（実店舗）",
    title: "結婚相談所 実店舗アカウント運用",
    summary:
      "実店舗の集客強化を目的に、Instagramアカウントの戦略設計・運用・分析を実施。",
    metrics: ["インプレッション数 10倍"],
    scope: ["Instagram", "MEO連動"],
    caseId: "case-konkatsu",
  },
  {
    id: "pm-konkatsu",
    category: "pm",
    industry: "結婚相談所",
    title: "結婚相談所のPM",
    summary:
      "ターゲットペルソナの再設計とフロント商品の設計までを担当。事業全体のファネル整理に貢献。",
    scope: ["ペルソナ設計", "フロント商品設計"],
    caseId: "case-konkatsu",
  },

  // ============================================================
  // 案件2: 大手住宅関連グループ = case-sala （6件）
  // ============================================================
  {
    id: "ads-fire-insurance",
    category: "ads",
    industry: "金融（火災保険）",
    title: "火災保険のリスティング広告運用",
    summary:
      "Yahoo!・Googleリスティング広告を併用し、CPAを安定的に5,000円台へ落とし込んだ運用事例。",
    metrics: ["CPA 5,000円台"],
    scope: ["Yahoo!広告", "Google広告", "リスティング"],
    recent: true,
    needsHearing: true,
    caseId: "case-sala",
  },
  {
    id: "lp-fire-insurance",
    category: "lp",
    industry: "金融（火災保険）",
    title: "火災保険LPの新規制作",
    summary:
      "ヒアリング・競合分析・ワイヤーフレーム設計・構成設計・広告運用までを一貫して担当した火災保険LP案件。",
    scope: ["ヒアリング", "競合分析", "ワイヤー", "広告連動"],
    url: "https://www.sala-fs.co.jp/salanokasaihoken/",
    caseId: "case-sala",
  },
  {
    id: "lp-reverse-mortgage",
    category: "lp",
    industry: "金融（リバースモーゲージ）",
    title: "リバースモーゲージLP",
    summary:
      "シニア層向け金融商材のLPを制作。商材理解と読み手の不安を踏まえた構成設計を実施。",
    scope: ["構成設計", "ディレクション"],
    url: "https://www.sala-fs.co.jp/yutorian/",
    caseId: "case-sala",
  },
  {
    id: "lp-leaseback",
    category: "lp",
    industry: "金融（リースバック）",
    title: "リースバックLP",
    summary:
      "金融商材のリースバックLP。複雑な仕組みを噛み砕いて訴求する構成設計を担当。",
    scope: ["構成設計"],
    url: "https://andrenovation.sala.jp/leaseback_lp/",
    caseId: "case-sala",
  },
  {
    id: "pm-housing-group",
    category: "pm",
    industry: "大手住宅関連グループ",
    title: "大手住宅関連グループの複数商材PM",
    summary:
      "セルフ式ドッグスパ／火災保険／リバースモーゲージなど、グループ内の複数サービスのPMを担当。",
    scope: ["複数商材PM", "戦略設計"],
    caseId: "case-sala",
  },
  {
    id: "cons-housing-lecturer",
    category: "consulting",
    industry: "大手住宅関連グループ",
    title: "大手住宅関連グループ社内向けWEBマーケ講師",
    summary:
      "社内マーケターの育成を目的に、WEBマーケのテーマで講義・勉強会を担当。",
    scope: ["社内教育", "講師"],
    caseId: "case-sala",
  },

  // ============================================================
  // 案件3: 工場系特化・人材派遣企業 = case-staffing-factory （4件）
  // ============================================================
  {
    id: "ads-haken-recruit",
    category: "ads",
    industry: "人材派遣",
    title: "工場系特化・人材派遣会社の応募〜採用導線",
    summary:
      "応募から採用までの一気通貫の運用設計で、応募単価・採用単価・ROASを高水準で安定化。",
    metrics: ["応募単価 5,000円", "採用単価 12,000円", "ROAS 4,500%"],
    scope: ["広告運用", "応募導線", "クリエイティブ"],
    recent: true,
    needsHearing: true,
    caseId: "case-staffing-factory",
  },
  {
    id: "crm-lstep",
    category: "crm",
    industry: "人材派遣",
    title: "人材派遣企業のLステップ構築",
    summary:
      "応募〜採用までのCRMをLステップで構築。応募者の状態に合わせた自動化と、内部運用まで含めた設計。",
    metrics: ["採用数 20名以上UP", "応募数 120件以上UP"],
    scope: ["Lステップ", "採用CRM", "自動化設計"],
    caseId: "case-staffing-factory",
  },
  {
    id: "crm-ats",
    category: "crm",
    industry: "人材派遣",
    title: "人材派遣企業のATSツール構築",
    summary:
      "採用業務の生産性向上を目的に、ATS（採用管理）ツールの構築を担当。",
    metrics: ["業務生産性UP"],
    scope: ["ATS", "業務効率化"],
    caseId: "case-staffing-factory",
  },
  {
    id: "pm-staffing",
    category: "pm",
    industry: "人材派遣",
    title: "人材派遣企業のPM・集客戦略改革",
    summary:
      "ペルソナ設計から集客戦略・集客スキームの根本的な見直しまで、上流から事業の意思決定に並走。",
    scope: ["ペルソナ設計", "集客戦略", "スキーム改革"],
    caseId: "case-staffing-factory",
  },

  // ============================================================
  // 案件4: 大手ビジネススクール = case-bizschool （2件）
  // ============================================================
  {
    id: "ads-bizschool-google",
    category: "ads",
    industry: "大手ビジネススクール",
    title: "Googleリスティング広告担当",
    summary:
      "大手ビジネススクールのリスティング広告運用担当。アカウント設計から日々の運用最適化までを担当。",
    scope: ["Google広告", "リスティング"],
    recent: true,
    ongoing: true,
    needsHearing: true,
    caseId: "case-bizschool",
  },
  {
    id: "cons-bizschool-lecturer",
    category: "consulting",
    industry: "大手ビジネススクール",
    title: "大手ビジネススクールでマーケティング講師",
    summary:
      "大手ビジネススクールにて、マーケティングをテーマに講師として登壇。受講者の課題に応じた実践的なカリキュラムで対応。",
    scope: ["講師", "カリキュラム設計"],
    recent: true,
    ongoing: true,
    needsHearing: true,
    caseId: "case-bizschool",
  },

  // ============================================================
  // 案件5: 薬局フランチャイズ = case-pharmacy-fc （2件）
  // ============================================================
  {
    id: "ads-pharmacy-fc",
    category: "ads",
    industry: "薬局フランチャイズ",
    title: "薬局フランチャイズ加盟の集客",
    summary:
      "「LPなし／導線曖昧」の状態から、LP制作・導線設計・Meta×Googleの二段運用までを土台ごと再構築。",
    metrics: ["問合せ数 0件 → 8件"],
    scope: ["LPO", "導線構築", "Meta広告", "Google広告"],
    caseId: "case-pharmacy-fc",
  },
  {
    id: "pm-pharmacy-fc",
    category: "pm",
    industry: "薬局フランチャイズ",
    title: "薬局フランチャイズ加盟の集客戦略",
    summary:
      "「薬剤師が経営者に提案する」導線設計を含む、限定ターゲット向けの集客戦略を企画。",
    scope: ["導線設計", "戦略立案"],
    caseId: "case-pharmacy-fc",
  },

  // ============================================================
  // 単独案件（recent優先 → その他）
  // ============================================================
  {
    id: "lp-major-staffing",
    category: "lp",
    industry: "大手人材",
    title: "大手人材会社のLP制作",
    summary:
      "大手人材会社のLP制作を担当。事業ターゲットを踏まえた設計・コピー・構成のディレクションを実施。",
    scope: ["ヒアリング", "構成設計", "ディレクション"],
    recent: true,
    needsHearing: true,
  },
  {
    id: "lp-willtec-engineer",
    category: "lp",
    industry: "エンジニア派遣（新卒採用）",
    title: "エンジニア派遣会社の新卒採用LP",
    summary:
      "理系学生限定のエンジニアキャリアセミナーへの集客LPを担当。学生視点でのキャリア訴求の構成設計・コピー監修を一貫対応。",
    scope: ["構成設計", "コピー監修", "新卒採用LP"],
    url: "https://campaign-link.studio.site/gaxi-willtec/careerseminar",
    recent: true,
    needsHearing: true,
  },
  {
    id: "lp-baseme-gakushi",
    category: "lp",
    industry: "HRtech（サイト集客）",
    title: "HRtechサービスの集客LP",
    summary:
      "HRtechサービスの会員獲得を目的としたコラボキャンペーンLP。プロフィール作成→特典訴求で会員登録を促進する構成設計を担当。",
    scope: ["構成設計", "キャンペーン設計", "コピー監修"],
    url: "https://baseme.app/lp/gaxi202512",
    recent: true,
    needsHearing: true,
  },
  {
    id: "lp-jkhd-internship",
    category: "lp",
    industry: "新卒採用（インターン集客）",
    title: "27卒インターン集客LP",
    summary:
      "27卒向け体験型インターンの集客LPを担当。学生視点での参加メリット訴求の構成設計を実施。",
    scope: ["構成設計", "コピー監修", "新卒採用LP"],
    url: "https://campaign-link.studio.site/jkhd/20251129",
    recent: true,
    needsHearing: true,
  },
  {
    id: "ads-shinsotsu-event",
    category: "ads",
    industry: "新卒採用（スーパーバイザー職）",
    title: "スーパーバイザーの新卒採用集客広告運用",
    summary:
      "スーパーバイザー職の新卒採用を目的とした集客広告を担当。ターゲットの行動文脈から逆算した配信設計でCPAを抑制。",
    metrics: ["CPA 5,000円"],
    scope: ["広告運用", "新卒採用"],
    recent: true,
    needsHearing: true,
  },
  {
    id: "ads-ryugaku-scholarship",
    category: "ads",
    industry: "留学奨学金サイト",
    title: "留学奨学金サイトのMeta広告運用",
    summary:
      "業界平均CPA 2〜3万円のジャンルで、業界平均の1/5以下のCPA水準を実現した運用事例。",
    metrics: ["CPA 4,000円台", "業界平均 2〜3万円"],
    scope: ["Meta広告", "クリエイティブ"],
    recent: true,
    needsHearing: true,
  },
  {
    id: "ads-nurse",
    category: "ads",
    industry: "看護師転職エージェント",
    title: "看護師転職エージェントのリスト獲得",
    summary:
      "WEB広告での集客テストとオプトイン獲得を目的に、Meta×Googleの二段運用を実施。",
    metrics: ["20名以上のリスト獲得", "応募CPA 700円台"],
    scope: ["Meta広告", "Google広告"],
  },
  {
    id: "ads-ecocute",
    category: "ads",
    industry: "住宅設備（エコキュート）",
    title: "エコキュート買い替えキャンペーン",
    summary:
      "「壊れて困った瞬間に検索する」商材特性から逆算し、認知（LINE広告）→刈り取り（Google検索）の二段配信を設計。結果としてCV経路はリスティング側に集約された。",
    metrics: ["成約 3件", "ROAS 750%", "CPA 20,000円"],
    scope: ["LINE広告", "Google広告", "戦略設計"],
  },
  {
    id: "lp-real-estate-buy",
    category: "lp",
    industry: "不動産買取",
    title: "不動産買取LP",
    summary:
      "不動産買取サービスのLP制作。査定〜買取までの導線設計を含めた構成。",
    scope: ["構成設計"],
  },
  {
    id: "lp-apparel-staffing",
    category: "lp",
    industry: "アパレル特化人材派遣",
    title: "アパレル系特化の人材派遣LP",
    summary:
      "アパレル業界に特化した人材派遣サービスのLP制作。業界文脈に合わせた構成・コピーで設計。",
    scope: ["構成設計", "コピー監修"],
  },
  {
    id: "sns-business-reel",
    category: "sns",
    industry: "ビジネス系SNS",
    title: "ビジネス系アカウントのリール運用",
    summary:
      "ビジネステーマのアカウントでリール制作・運用を担当。1本で22万再生を獲得。",
    metrics: ["リール22万再生"],
    scope: ["Instagram", "リール制作"],
  },
  {
    id: "sns-business-followers",
    category: "sns",
    industry: "ビジネス系SNS",
    title: "ビジネス系アカウントの初期立ち上げ",
    summary:
      "新規アカウントを立ち上げから設計・運用し、短期間でフォロワーを獲得。",
    metrics: ["開始2ヶ月で 1,000フォロワー"],
    scope: ["Instagram", "アカウント設計"],
  },
  {
    id: "cons-baby-food",
    category: "consulting",
    industry: "離乳食系Instagram",
    title: "離乳食系Instagramアカウントのコンサル",
    summary:
      "Instagramアカウントの戦略・コンテンツ設計についてコンサルティング。",
    scope: ["Instagram", "コンサル"],
  },
  {
    id: "cons-local-event",
    category: "consulting",
    industry: "自治体",
    title: "自治体イベント支援",
    summary:
      "自治体主催イベントの集客・運営に関わる支援を実施。",
    scope: ["イベント", "コンサル"],
  },
  {
    id: "pm-bee",
    category: "pm",
    industry: "蜂駆除サービス",
    title: "蜂駆除サービスのPM",
    summary:
      "ニッチ商材の集客戦略・サービス設計に並走。",
    scope: ["戦略設計"],
  },
  {
    id: "aff-ad",
    category: "affiliate",
    industry: "金融商品（FXツール）",
    title: "アドアフィリエイト（直接提携）",
    summary:
      "Meta広告とLPを組み合わせ、販売元との直接提携で運用。LP制作・Lステップ構築・販売導線設計までDRMの一連の流れを実体験。",
    metrics: ["月商70万円達成", "LP CVR 15〜35%", "CPA 250〜500円"],
    scope: ["Meta広告", "LP", "Lステップ", "DRM"],
  },
  {
    id: "aff-sns",
    category: "affiliate",
    industry: "恋愛系SNS",
    title: "SNSアフィリエイト（恋愛系）",
    summary:
      "Instagram・TikTokを併用し、占いサイト／マッチングアプリ／結婚相談所案件をアフィリエイト。マネタイズから逆算したコンセプト設計で、少フォロワーでも成果を実現。",
    metrics: ["300フォロワーで月5万円マネタイズ"],
    scope: ["Instagram", "TikTok", "コンセプト設計"],
  },
];
