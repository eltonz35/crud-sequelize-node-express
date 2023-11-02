import { Request, Response } from "express";
import { Product } from "../entities/product";
import { AppDataSource} from "../database/data-source";

export const cadastrarProduto = async ( req: Request, res: Response ) => {

    try {
        const product = new Product();
        product.title = req.body.title;
        product.price = req.body.price;
        product.color = req.body.color;
        product.size = req.body.size;

        await AppDataSource.getRepository(Product).save(product);

        return res.status(201).json({ok: true});

    } catch(error) {
        console.log(error, "Erro ao cadastrar produto");
        return res
               .status(500)
               .json({ok: false, message: "Erro ao cadastrar usuario"});
        
    }
};

export const listarProdutos = async (req: Request, res: Response) => {
    try{
        const products = await AppDataSource.getRepository(Product).find();

        return res.status(200).json({ok: true, products: products})

    } catch(error){
        console.log(error, "Erro ao listar produtos");
        return res
               .status(500)
               .json({ok: false, message: "Erro ao listar produtos"});

    }
};

export const atualizarProduto =async (req: Request, res: Response) => {
    const id = req.params.user_id;

    try {
        const product = await AppDataSource.getRepository(Product).findOne({where: {id: +id}});

        if(!product) {
            return res.status(404).json({ ok: false, message: "Não existe um produto com esse ID"})
        }

        if(req.body.title) {
            product.title = req.body.title; 
        }

        if(req.body.price) {
            product.price = req.body.price;
        }

        if(req.body.color) {
            product.color = req.body.color;
        }

        if(req.body.size)  {
            product.size = req.body.size;
        }

        await AppDataSource.getRepository(Product).save(product);

        return res.status(200).json({ ok: true });

    } catch (error) {
        console.log(error, "Erro ao atualizar produto");
        
        return res
        .status(500)
        .json({ ok: false, message: "Erro ao cadastrar produto"});
}
    };

    export const  deletarProduto = async (req: Request, res: Response) => {
        const id = req.params.product_id;
    
        try {
            const product = await AppDataSource.getRepository(Product).findOne({
                where: { id: parseInt(id) },
            })
    
            if(!product) {
                return res
                    .status(404)
                    .json({ ok: false, message: "Não existe um produto com este ID"});
            }
    
            await AppDataSource.getRepository(Product).delete(product);
    
    
            return res.status(200).json({ ok: true });
        } catch (error) {
            console.log(error, "Erro ao deletar produto");
            return res
                .status(500)
                .json({ ok: false, message: "Erro ao cadastrar o produto"});
        }
    };      