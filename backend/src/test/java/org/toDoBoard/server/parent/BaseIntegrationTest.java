package org.toDoBoard.server.parent;

import junitparams.JUnitParamsRunner;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.TestContextManager;
import org.springframework.test.context.web.WebAppConfiguration;
import org.toDoBoard.server.ServerApp;

@RunWith(JUnitParamsRunner.class)
@SpringApplicationConfiguration(classes = ServerApp.class)
@WebAppConfiguration
@IntegrationTest
public class BaseIntegrationTest {

    @Before
    public final void before() throws Exception {
        TestContextManager testContextManager = new TestContextManager(getClass());
        testContextManager.prepareTestInstance(this);
    }
}
