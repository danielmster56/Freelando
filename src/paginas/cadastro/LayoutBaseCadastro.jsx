import { Col, Row } from "react-grid-system"
import { Card } from "../../componentes/Card/Card"
import { Outlet } from "react-router-dom"

const LayoutBaseCadastro = () => {
    return (
        <Row justify="center">
            <Col xxxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
                <Card>
                <Outlet/>  {/*Outled indica onde os elementos filhos serão renderizados */}
                </Card>
            </Col>
        </Row>
    )
}

export default LayoutBaseCadastro