'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MapIcon, NewspaperIcon, UserIcon, DiscordIcon } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">
            <span className="text-blue-600 dark:text-blue-400">Bluesky</span>
            <span className="text-green-600 dark:text-green-400">MC</span>
            <Badge variant="secondary" className="ml-2">
              Informal
            </Badge>
          </h1>
          <p className="text-muted-foreground">マインクラフトを一緒に楽しもう</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>サーバー情報</CardTitle>
              <CardDescription>接続に必要な情報</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">アドレス</div>
                <code className="rounded bg-muted px-2 py-1">bskymc.com</code>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">ゲーマータグ</div>
                <code className="rounded bg-muted px-2 py-1">bskymcinf</code>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="text-sm font-medium">サーバーバージョン</div>
                <Badge variant="outline">Paper 1.21.1</Badge>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">対応バージョン</div>
                <div className="space-y-1">
                  <Badge variant="outline" className="mr-2">
                    Java: 1.21 - 1.21.3
                  </Badge>
                  <Badge variant="outline">Bedrock: 1.20.80 - 1.21.44</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>BlueskyMCって何？</CardTitle>
              <CardDescription>サーバーについて</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Blueskyという SNSの非公式マイクラサーバーです！
                ゆったりとみんなでマイクラをしております。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <MapIcon className="mr-2 h-4 w-4" />
                  Dynmap
                </Button>
                <Button variant="outline" className="w-full">
                  <MapIcon className="mr-2 h-4 w-4" />
                  BlueMap
                </Button>
                <Button variant="outline" className="w-full">
                  <UserIcon className="mr-2 h-4 w-4" />
                  アカウント
                </Button>
                <Button variant="outline" className="w-full">
                  <NewspaperIcon className="mr-2 h-4 w-4" />
                  フィード
                </Button>
              </div>
              <Button className="w-full" variant="default">
                <DiscordIcon className="mr-2 h-4 w-4" />
                Discordに参加
              </Button>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            <a href="https://example.com" className="hover:underline">
              raitako-1のホームページ
            </a>
            からのアクセス
          </p>
          <p className="mt-2">最終更新: 2024年2月</p>
        </footer>
      </div>
    </div>
  )
}
