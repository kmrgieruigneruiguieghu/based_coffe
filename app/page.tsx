import type { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { 
  Calendar,
  Edit,
  Settings,
  Share2,
  FileText,
  Users,
  Heart,
  UserCheck,
  Mail,
  PhoneOutgoing,
  Github,
  Image as ImageIcon,
  File,
  Bookmark,
  MapPin,
  Slack,
  Youtube
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Based Coffee',
}

export default function ProfilePage() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#04060D] to-[#0F1A2F]">
        <div className="w-full">
          <div className="h-70 w-full relative overflow-hidden">
            <img src="/shapka.jpg" alt="Cover" className="w-full h-full object-cover"/>
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
            <Card className="bg-[#1A2635] border-gray-700">
              <CardHeader className="flex flex-col items-center text-center relative">
                <div className="mb-4">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="cursor-pointer">
                        <Avatar className="w-40 h-40">
                          <AvatarImage src="/skibuye.webp"/>
                          <AvatarFallback>Error</AvatarFallback>
                        </Avatar>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-[#1A2635] border-gray-700 text-white">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <p>@skibidi</p>
                          <p>Frontend разработчик</p>
                          <div className="flex items-center gap-1">
                            <MapPin className="mr-2 mt-2 text-blue-400"/>г. Москва, ул. Такая-то
                          </div>
                          <div className="flex items-center mt-2">
                            <Calendar className="mr-2 text-blue-400"/>Зарегистрирован: 28.02.26
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <CardTitle className="text-3xl mb-2 flex items-center justify-center gap-2 text-white">
                  Maslobitov Ilya
                </CardTitle>
                <CardDescription className="text-lg mb-3 text-gray-300">
                  Frontend разработчик
                </CardDescription>
                <CardDescription className="text-lg mb-3 text-gray-300">
                  Люблю картошку фри, не люблю крылышки
                </CardDescription>
                <div className="flex justify-end gap-3 w-full">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="gap-2 border-gray-600 bg-[#1A2635] text-white hover:bg-[#1A2635] hover:border-blue-500 hover:text-white">
                        <Edit className="w-4 h-4"/>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Редактировать профиль</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="gap-2 border-gray-600 bg-[#1A2635] text-white hover:bg-[#1A2635] hover:border-blue-500 hover:text-white">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Поделиться</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="gap-2 border-gray-600 bg-[#1A2635] text-white hover:bg-[#1A2635] hover:border-blue-500 hover:text-white">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Настройки</TooltipContent>
                  </Tooltip>
                </div>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <Card className="bg-[#1A2635] border-gray-700 hover:bg-[#1E2A3A] transition-all hover:border-blue-500">
                <CardContent className="p-6 text-center">
                  <FileText className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold text-white">228</div>
                  <div className="text-sm text-white">Публикаций</div>
                </CardContent>
              </Card>
              <Card className="bg-[#1A2635] border-gray-700 hover:bg-[#1E2A3A] transition-all hover:border-blue-500">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-green-400" />
                  <div className="text-2xl font-bold text-white">67</div>
                  <div className="text-sm text-white">Подписчиков</div>
                </CardContent>
              </Card>
              <Card className="bg-[#1A2635] border-gray-700 hover:bg-[#1E2A3A] transition-all hover:border-blue-500">
                <CardContent className="p-6 text-center">
                  <UserCheck className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <div className="text-2xl font-bold text-white">48</div>
                  <div className="text-sm text-white">Подписки</div>
                </CardContent>
              </Card>
              <Card className="bg-[#1A2635] border-gray-700 hover:bg-[#1E2A3A] transition-all hover:border-blue-500">
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 mx-auto mb-2 text-red-400" />
                  <div className="text-2xl font-bold text-white">9к</div>
                  <div className="text-sm text-white">Лайков</div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-[#1A2635] border-gray-700 mt-8 text-white">
              <CardHeader>
                <CardTitle>О себе</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>Люблю картошку фри, не люблю крылышки</p>
                <div>
                  <p className="font-semibold mb-3 text-gray-200">Навыки</p>
                  <div className="flex flex-wrap gap-2">
                    {["Javascript", "HTML/CSS", "Figma", "Typescript", "React", "Python"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-[#2A3748] text-white border-0 px-3 py-1">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div>
                  <p className="mb-3 text-white">Контакты</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <p>ilyaromensky@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneOutgoing className="w-5 h-5 text-blue-400" />
                      <p>+7 916 423 12 98</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-blue-400" />
                      <p>Github: Yqw</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <p>Регистрация: 28.02.26</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Youtube className="w-5 h-5 text-blue-400" />
                      <p>Youtube: @ilikepots84</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Tabs defaultValue="posts" className="mt-8">
              <TabsList className="grid w-full grid-cols-4 bg-[#1A2635]">
                <TabsTrigger value="posts" className="flex items-center gap-2 text-white data-[state=active]:bg-[#2563EB] data-[state=active]:text-white hover:text-white">
                  <FileText className="w-4 h-4 text-blue-400"/>Все посты</TabsTrigger>
                <TabsTrigger value="media" className="flex items-center gap-2 text-white data-[state=active]:bg-[#2563EB] data-[state=active]:text-white hover:text-white">
                  <ImageIcon className="w-4 h-4 text-blue-400"/>Медиа</TabsTrigger>
                <TabsTrigger value="documents" className="flex items-center gap-2 text-white data-[state=active]:bg-[#2563EB] data-[state=active]:text-white hover:text-white">
                  <File className="w-4 h-4 text-blue-400"/>Документы</TabsTrigger>
                <TabsTrigger value="favorites" className="flex items-center gap-2 text-white data-[state=active]:bg-[#2563EB] data-[state=active]:text-white hover:text-white">
                  <Bookmark className="w-4 h-4 text-blue-400"/>Избранное</TabsTrigger>
              </TabsList>
              <TabsContent value="posts">
                <Card className="bg-[#1A2635] border-gray-700">
                  <CardContent className="p-15 text-center text-gray-400">Пока нет постов</CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="media">
                <Card className="bg-[#1A2635] border-gray-700">
                  <CardContent className="p-15 text-center text-gray-400">Пока нет медиафайлов</CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="documents">
                <Card className="bg-[#1A2635] border-gray-700">
                  <CardContent className="p-15 text-center text-gray-400">Пока нет документов</CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="favorites">
                <Card className="bg-[#1A2635] border-gray-700">
                  <CardContent className="p-15 text-center text-gray-400">Пока нет избранного</CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <footer className="border-t border-gray-700 pt-8 mt-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-10 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-gradient-to-r from-[#4C326E] to-[#B30000] rounded-xl flex items-center justify-center">
                    <Slack className="text-white"></Slack>
                  </div>
                  <p>© 2026 My Profile. Все права защищены.</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                  <Button variant="link" className="p-0 h-auto text-gray-400 hover:text-blue-400">О нас</Button>
                  <p className="text-gray-600">|</p>
                  <Button variant="link" className="p-0 h-auto text-gray-400 hover:text-blue-400">Поддержка</Button>
                  <p className="text-gray-600">|</p>
                  <Button variant="link" className="p-0 h-auto text-gray-400 hover:text-blue-400">Блог</Button>
                  <p className="text-gray-600">|</p>
                  <Button variant="link" className="p-0 h-auto text-gray-400 hover:text-blue-400">Вакансии</Button>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                  <Button variant="link" className="p-0 h-auto text-gray-500 hover:text-blue-400">Конфиденциальность</Button>
                  <span className="text-gray-600">|</span>
                  <Button variant="link" className="p-0 h-auto text-gray-500 hover:text-blue-400">Условия</Button>
                </div>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-blue-400 hover:bg-[#2563EB]/20">
                    <Youtube className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-blue-400 hover:bg-[#2563EB]/20">
                    <Github className="w-5 h-5"/>
                  </Button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
