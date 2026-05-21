# ポートフォリオサイト 進捗ログ

> 最終更新: 2026-05-21
> 担当: ゆーとくん × ミラ（Claude Code）

---

## 🌐 プロジェクト基本情報

| 項目 | 内容 |
|---|---|
| **本番URL（メイン）** | https://yuto-tomita.vercel.app |
| **本番URL（予備／イベント申込で使った方）** | https://portfolio-site-peach-beta-93.vercel.app |
| **GitHubリポジトリ** | https://github.com/tomitayuto/portfolio-site |
| **GitHubユーザー名** | tomitayuto |
| **Vercelプロジェクト名** | portfolio-site |
| **Vercelプラン** | Hobby（無料） |
| **コミット用メアド** | otoyu.web.2@gmail.com |
| **技術スタック** | Next.js 16 (App Router, Turbopack) + React + TypeScript + Tailwind CSS v4 |

### 配色（モノクロ × ティールアクセント）
- 背景: `#EEEEEE`
- 前景（メインテキスト）: `#222831`
- サブテキスト: `#393E46`
- アクセント: `#00ADB5`（ティール）
- カード背景: `#FFFFFF`

---

## ✅ 完成済みセクション（2026-05-21 終了時点）

### 1. Header
- 屋号「WEBマーケの超☆伴走屋」（☆はティール）
- ナビ: Skills / Services / Works / Career
- Contactリンク（アクセント下線）
- スマホでは2段表示（屋号+Contact / ナビ）

### 2. Hero（ファーストビュー）★完成度高い
- EYEBROW: PORTFOLIO — 2026
- 名前ドーン: 「富田 悠斗 YUTO TOMITA」（YUTO TOMITAはティール）
- 名前下にティール薄下線（アクセント装飾）
- 屋号: 「WEBマーケの超☆伴走屋」
- 数値スタッツ4枚（社会的証明）:
  - WEBマーケ歴: ６年目
  - 支援実績: ２０社以上
  - 累計広告運用額: １億円以上
  - 現在対応中の案件: ４社 / うち１社でCMO
- 各値にティール下線、左から流れる描画アニメーション（順番に再生）
- CTAボタン2つ: 「お問い合わせ →」「実績を見る」（スマホで全幅）

### 3. Skills（旧Profile）★完成
- eyebrow: Skills
- h2: スキル
- スキルタグ11個:
  - 広告運用 / SNS運用 / CRM構築（Lステップ / エルメ）
  - LP作成・LPO / ECサイトページ構築
  - ディレクション / プロダクトマネジメント
  - マーケティング顧問 / マーケティング講師 / マーケティングコンサル
  - DXコンサル
- 業務範囲・社内教育の説明文

### 4. Services（対応業務）★基本構造のみ、磨き込み未着手
- 7カテゴリのアコーディオン形式
  - プロダクトマネジメント
  - コンサルティング・講師
  - LP作成・LPO
  - CRM構築
  - 広告運用代行
  - SNS運用代行
  - アフィリエイト

### 5. Works（実績）★基本構造のみ、磨き込み未着手
- 全33案件
- カテゴリフィルター付き（すべて33 / 直近1年8 / 広告運用10 / LP作成・LPO 7 / プロダクトマネジメント5 / コンサル・講師4 / CRM構築2 / SNS運用3 / アフィリエイト2）
- 「直近1年」「継続中」バッジ表示
- メトリクス強調表示

### 6. Career（経歴）★基本構造のみ、磨き込み未着手
- 時系列タイムライン7ステップ
- 2025年1月〜現在の「WEBマーケティング伴走支援」が最新

### 7. Contact（お問い合わせ）★基本構造のみ、磨き込み未着手
- 4チャネル: Jicooミーティング予約 / Email / Phone / LINE
- 24時間以内返信記載

### 8. Footer
- 屋号、ナビ、連絡先、最終更新日

---

## 🔧 セッション中にやったこと（時系列）

1. **環境セットアップ**
   - Next.js 16 プロジェクト作成
   - フォント設定（Noto Sans JP + Inter）
   - Tailwind CSS v4 トンマナ定義

2. **データ構造設計**
   - `data/site.ts`: 屋号、肩書き、スタッツ、対応業務7カテゴリ、経歴
   - `data/works.ts`: 33案件（マインドマップ26件＋直近1年8件）

3. **6セクション基本実装**
   - Header / Hero / Services / Works / Career / Contact / Footer

4. **GitHub & Vercel連携**
   - GitHubアカウント作成（tomitayuto）
   - Vercel Hobbyプラン登録
   - Personal Access Token発行・push
   - Vercel自動デプロイセットアップ
   - 公開URL `yuto-tomita.vercel.app` 取得

5. **配色変更**
   - ウォームニュートラル → モノクロ×ティール
   - 4色パレット採用

6. **レスポンシブ磨き込み**
   - スマホ・タブレット・PC各幅の動作確認
   - ヘッダーをスマホで2段表示に
   - スタッツカードをスマホで2x2グリッドに

7. **FV（Hero）大規模磨き込み**
   - 屋号と名前の役割入れ替え
   - 名前をドーンと大きく
   - YUTO TOMITAをティール2/3サイズに
   - スタッツカードのフォント徹底チューニング
   - 値（数字）を全角化
   - ティール下線＋左から流れるアニメーション追加
   - CTAボタン拡大、拠点テキスト削除

8. **Profileセクション整理**
   - FVと重複していた情報を全削除
   - Skills特化セクションに改名・改造

---

## 📌 次回着手：Services以降の磨き込み

### 残りタスク
- [ ] **Services（対応業務）**: アコーディオン内容のブラッシュアップ、ティール装飾の追加、文言修正
- [ ] **Works（実績）**: フィルター動作の最適化、カードデザイン磨き、直近1年9件のヒアリング詳細化
- [ ] **Career（経歴）**: タイムライン磨き、現職強調
- [ ] **Contact（お問い合わせ）**: CTAボタン整合性、Jicooリンクテスト
- [ ] **Footer**: 整合性チェック
- [ ] **OGP画像**: SNSシェア時に表示される画像作成
- [ ] **直近1年実績9件の詳細ヒアリング**:
  - 婚活サービスの広告運用（ROAS 2,500%）
  - 工場系人材派遣（応募単価5,000円 / 採用単価12,000円 / ROAS 4,500%）
  - 大手ビジネススクール マーケティング講師
  - 大手ビジネススクール Googleリスティング広告
  - 留学奨学金サイト Meta広告（CPA 4,000円台）
  - 新卒採用イベント集客（CPA 5,000円）
  - 火災保険リスティング広告（CPA 5,000円台）
  - 大手人材会社 LP作成
- [ ] **独自ドメイン取得**（任意・年1,500〜3,000円）

### 次回優先：Servicesセクションから

---

## 🛠 運用フロー（覚書）

### ローカルで修正 → 本番反映の流れ

```bash
# 1. ローカルで dev サーバー起動して確認
cd /Users/yuto_tomita/Desktop/トミタスク-NEO/パーソナル/portfolio-site
npm run dev
# → http://localhost:3000 で確認

# 2. 修正完了後にgit反映
git add <変更ファイル>
git commit -m "コミットメッセージ"
git push
# → Vercel が自動検知して 1〜2分でデプロイ完了
```

### ファイル構成

```
portfolio-site/
├── app/
│   ├── components/      # 各セクションのコンポーネント
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Profile.tsx  ← Skills セクション（中身整理済み）
│   │   ├── Services.tsx
│   │   ├── Works.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Process.tsx   # 未使用（旧構成の置き場、空コンポーネント）
│   │   └── Strengths.tsx # 未使用（旧構成の置き場、空コンポーネント）
│   ├── data/
│   │   ├── site.ts      # 屋号・肩書き・スタッツ・経歴
│   │   └── works.ts     # 33案件のデータ
│   ├── globals.css      # トンマナ・カスタムCSS（下線アニメ含む）
│   ├── layout.tsx       # メタデータ・フォント設定
│   └── page.tsx         # 全セクションを並べる入口
├── public/              # 静的ファイル
└── PROGRESS.md          # このファイル
```

### よく触るファイル

- **コピー・データ変更**: `app/data/site.ts` or `app/data/works.ts`
- **デザイン・レイアウト変更**: `app/components/<セクション名>.tsx`
- **トンマナ・色変更**: `app/globals.css`
- **メタデータ・タイトル**: `app/layout.tsx`

---

## 💡 ノウハウ・気づき（次回も使えるやつ）

### レスポンシブ調整
- スマホはコンテンツ詰めるために2カラムグリッドや横スクロールが有効
- `clamp(min, preferred, max)` でフォントサイズを画面幅連動に
- `whitespace-nowrap` で改行を強制ガード
- 横幅キツキツ問題は、padding縮める or フォント小さくする の2択
- 大きな文字を扱う時は `leading-none` で行間を詰める

### 文言ポリシー
- **数字は全角に**（６年目、２０社以上、１億円以上、４社、うち１社でCMO）
- **マーケ → マーケティング** に統一（略語は避ける）
- 「持っているスキル」より「スキル」のがシンプルで強い
- FVは社会的証明ガッツリ、長文は載せない

### 装飾
- ティール（#00ADB5）はアクセント色として「ここ重要！」の場所だけに使う
- アクセント色＋下線で数字・実績を強調
- 下線アニメーションは「左から右にスケール」で（::after + transform: scaleX）

### Vercel運用
- 自動デプロイ機能のおかげで、push するだけでサイト更新される
- `yuto-tomita.vercel.app` と `portfolio-site-peach-beta-93.vercel.app` の両方が同じサイトに紐づいてる（イベント申込で使った旧URLも生かしてる）

---

## 🔑 アクセス情報メモ

### Personal Access Token（GitHub）
- 90日有効、期限: 2026年8月19日
- macOSキーチェーンに保存済み（次回 push 時も自動認証）
- 必要なら https://github.com/settings/tokens で再発行

### Vercel
- GitHubアカウントでログイン
- ダッシュボード: https://vercel.com/dashboard
- プロジェクト名: portfolio-site

---

## 📝 次回セッション開始時のチェックリスト

1. このファイル（PROGRESS.md）を読み返す
2. `cd /Users/yuto_tomita/Desktop/トミタスク-NEO/パーソナル/portfolio-site`
3. `git status` で変更がないか確認
4. `npm run dev` でローカル起動
5. ブラウザで `http://localhost:3000` を開く
6. **Servicesセクション（`app/components/Services.tsx`）から磨き込み開始**

---

🚀 **Servicesセクション、明日からお疲れさま〜！**
