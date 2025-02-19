"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, GraduationCap, Lightbulb } from "lucide-react"

interface QuizOption {
    id: string
    text: string
}

export default function Quiz() {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const [progress, setProgress] = useState(33)

    const options: QuizOption[] = [
        { id: "A", text: "Listar todas as suas fontes de renda" },
        { id: "B", text: "Definir metas financeiras" },
        { id: "C", text: "Calcular gastos fixos" },
        { id: "D", text: "Abrir uma conta poupança" },
    ]

    const handleOptionClick = (id: string) => {
        setSelectedAnswer(id)
    }

    return (
        <div className="space-y-6">
            <div className="space-y-1 border-b px-8 md:px-24 py-6 flex justify-between items-center">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold">Lição: Orçamento Pessoal</h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Clock className="size-4" />
                            <span>10 minutos</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <GraduationCap className="size-4" />
                            <span>Nível Básico</span>
                        </div>
                    </div>
                </div>
                <div className="text-red-500 font-bold">
                    ❤️5
                </div>
            </div>
            <div className="max-w-3xl mx-auto">
                <Card className="p-6 space-y-4">
                    <Progress value={progress} className="h-2" />
                    <h2 className="text-lg font-medium">Qual é o primeiro passo para criar um orçamento pessoal efetivo?</h2>
                    <div className="space-y-2">
                        {options.map((option) => (
                            <Button
                                key={option.id}
                                variant={selectedAnswer === option.id ? "default" : "outline"}
                                className="w-full justify-start h-auto px-6 text-left"
                                onClick={() => handleOptionClick(option.id)}
                            >
                                <span className="font-medium flex items-center justify-center border border-neutral-400 rounded-full px-2.5 py-1">{option.id}</span>
                                {option.text}
                            </Button>
                        ))}
                    </div>

                    <div className="flex justify-between pt-4">
                        <Button variant="outline">Anterior</Button>
                        <Button variant="next">Próxima</Button>
                    </div>
                </Card>

                <div className="flex gap-3 p-4 bg-muted rounded-lg">
                    <Lightbulb className="size-5 text-yellow-500 flex-shrink-0" />
                    <p className="text-sm">
                        Dica: Um orçamento pessoal bem estruturado começa com um entendimento claro de quanto dinheiro entra e sai
                        da sua conta.
                    </p>
                </div>
            </div>
        </div>
    )
}

