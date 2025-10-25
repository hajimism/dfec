# DFEC - Designer Friendly Engineer Charter

**デザイナーにやさしいエンジニア委員会**の活動記録サイト

デザイナーと協働するエンジニアのための研究・実践プロジェクト。具体的なエピソードから理想状態を描き、課題解決の企画を考え、活動報告書としてまとめます。

## 概要

- **プロジェクト名**: DFEC (Designer-friendly Engineers Club)
- **目的**: デザイナーにやさしいエンジニアを目指すための活動研究
- **コンセプト**: まだちいさくて、でもアツいクラブ

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS 4, shadcn/ui
- **MDX**: @next/mdx, next-mdx-remote
- **リンター/フォーマッター**: Biome
- **パッケージマネージャー**: Bun
- **スキャフォールド**: scaffdog

## 開発環境のセットアップ

```bash
# 依存関係のインストール
bun install

# 開発サーバーの起動
bun dev
```

開発サーバーが起動したら [http://localhost:3000](http://localhost:3000) にアクセスしてください。

## プロジェクト構造

```
.
├── app/                   # Next.js App Router
│   ├── charter/          # デザイナーにやさしいエンジニア憲章
│   ├── reports/          # 活動報告一覧・詳細ページ
│   └── page.tsx          # トップページ
├── content/              # コンテンツディレクトリ
│   ├── _commands/        # 企画作成の手順書
│   └── reports/          # 活動報告記事（MDX形式）
├── components/           # Reactコンポーネント
│   ├── ui/              # shadcn/uiコンポーネント
│   └── header.tsx       # グローバルヘッダー
└── lib/                  # ユーティリティ関数
    └── mdx.ts           # MDXファイル処理
```

## コンテンツ作成ワークフロー

### 活動報告の作成手順

1. **新規レポートの生成**
```bash
bun run new:report
```

これにより `content/reports/draft-report/` 配下に以下が自動生成されます：
- `_thinking.md` - 各ステップの検討内容
- `_ideas.md` - 企画案の検討
- `index.mdx` - 活動報告書（最終成果物）

2. **ディレクトリのリネーム**
```bash
mv content/reports/draft-report content/reports/適切なスラッグ名
```

3. **コンテンツの作成**

企画検討プロセス（`content/_commands/index.md` 参照）：
- **Step 0**: 具体的なエピソード（あるある）の提示
- **Step 1**: 理想状態の描写
- **Step 2**: 現状の問題の言語化
- **Step 3**: Before/Afterアンケート項目の設計
- **Step 4**: 活動報告書ドラフトの作成
- **Step 5**: 具体的な企画案の立案

### レポートフォーマット

MDXファイルには以下のfrontmatterを含めます：

```yaml
---
title: "レポートタイトル"
date: "2025-10-25"
description: "レポートの概要説明"
tags: ["タグ1", "タグ2"]
---
```

## 利用可能なスクリプト

```bash
# 開発サーバーの起動
bun dev

# 本番ビルド
bun build

# 本番サーバーの起動
bun start

# Lintチェック
bun lint

# Lintエラーの自動修正
bun lint:fix

# コードフォーマット
bun format

# 新規レポートの生成
bun run new:report
```

## 主要機能

- **レポート管理システム**: MDXベースの活動報告記事
- **テーマ切り替え**: ライト/ダーク/システム設定
- **デザイナー憲章**: 10項目の行動指針
- **レスポンシブデザイン**: モバイル対応
- **Typography**: Tailwind Typographyによる読みやすい記事表示

## ライセンス

Private
